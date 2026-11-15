/**
 * scrape.ts
 *
 * Scrapes laundry care symbol data from the Wikipedia article "Laundry symbol".
 * Returns structured data including Wikimedia Commons image URLs and
 * descriptions for each symbol, grouped by category.
 *
 * The article lists the GINETEX / ISO 3758 symbols in galleries under one
 * heading per care treatment. Unlike ISO 7010 the symbols carry no official
 * codes, so each Wikimedia file is mapped to a stable code in {@link CODES}.
 *
 * Run indirectly via `yarn update` (bin/update.ts).
 */

import { parse } from 'node-html-parser';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** The five GINETEX / ISO 3758 care treatments. */
export type CareSymbolCategory =
  | 'washing'
  | 'bleaching'
  | 'drying'
  | 'ironing'
  | 'professional-care';

/** A single scraped care symbol entry. */
export interface ScrapedSymbol {
  /** Stable code assigned in {@link CODES}, e.g. `"wash-30"`. */
  code: string;
  /** Human-readable description from the Wikipedia gallery caption. */
  name: string;
  /** Wikimedia Commons file page URL for the symbol's SVG. */
  imageUrl: string | null;
}

/** Root shape of the data returned by {@link scrape}. */
export type ScrapedData = Record<CareSymbolCategory, ScrapedSymbol[]>;

// ---------------------------------------------------------------------------
// Category configuration
// ---------------------------------------------------------------------------

/**
 * Maps each category to the Wikipedia section heading IDs whose galleries it
 * collects. Drying and professional care are split into sub-sections on the
 * page (tumble/natural, dry/wet cleaning), so they read several headings.
 */
const CATEGORIES: Array<{ category: CareSymbolCategory; headingIds: string[] }> = [
  { category: 'washing', headingIds: ['Washing'] },
  { category: 'bleaching', headingIds: ['Bleaching'] },
  { category: 'drying', headingIds: ['Tumble_drying', 'Natural_drying'] },
  { category: 'ironing', headingIds: ['Ironing'] },
  { category: 'professional-care', headingIds: ['Dry_cleaning', 'Wet_cleaning'] },
];

/**
 * Stable code for every Wikimedia Commons file the article uses, keyed by the
 * file name without the `File:` prefix. Codes are the public identifiers
 * (slug IDs, component names, sprite IDs, CSS classes), so never change one;
 * add an entry when the article gains a symbol.
 */
export const CODES: Readonly<Record<string, string>> = {
  // Washing
  'Waschen.svg': 'wash',
  'Waschen_30.svg': 'wash-30',
  'Waschen_40.svg': 'wash-40',
  'Waschen_50.svg': 'wash-50',
  'Waschen_60.svg': 'wash-60',
  'ISO_7000_-_Ref-No_3087.svg': 'wash-30-mild',
  'ISO_7000_-_Ref-No_3088.svg': 'wash-30-very-mild',
  'Handwäsche.svg': 'hand-wash',
  'Nicht_waschen.svg': 'do-not-wash',
  // Bleaching
  'Bleichen.svg': 'bleach',
  'Bleichen_mit_chlor.svg': 'bleach-chlorine',
  'Sauerstoffbleichen.svg': 'bleach-non-chlorine',
  'Nicht_bleichen_v2.svg': 'do-not-bleach',
  'Nicht_bleichen.svg': 'do-not-bleach-legacy',
  // Tumble drying
  'Trommeltrocknen.svg': 'tumble-dry',
  'Trommeltrocknen_1.svg': 'tumble-dry-low',
  'Trommeltrocknen_2.svg': 'tumble-dry-normal',
  'Nicht_trommeltrocknen.svg': 'do-not-tumble-dry',
  // Natural drying
  'Trocknen.svg': 'natural-dry',
  'Trocknen_(leine).svg': 'line-dry',
  'Trocknen_(liegend).svg': 'dry-flat',
  'Trocknen_(tropfnass).svg': 'drip-dry',
  'Trocknen_(schatten).svg': 'dry-in-shade',
  'Trocknen_(leine_im_schatten).svg': 'line-dry-in-shade',
  'Trocknen_(liegend_im_schatten).svg': 'dry-flat-in-shade',
  'Trocknen_(tropfnass_im_schatten).svg': 'drip-dry-in-shade',
  // Ironing
  'Bügeln.svg': 'iron',
  'Bügeln_1.svg': 'iron-low',
  'Bügeln_2.svg': 'iron-medium',
  'Bügeln_3.svg': 'iron-high',
  'Nicht_bügeln.svg': 'do-not-iron',
  // Dry cleaning
  'Professionelle_reinigung.svg': 'professional-cleaning',
  'Professionelle_reinigung_(F).svg': 'dry-clean-hcs',
  'Professionelle_reinigung_(F)s.svg': 'dry-clean-hcs-mild',
  'Professionelle_reinigung_(F)ss.svg': 'dry-clean-hcs-very-mild',
  'Professionelle_reinigung_(P).svg': 'dry-clean-pce',
  'Professionelle_reinigung_(P)s.svg': 'dry-clean-pce-mild',
  'Professionelle_reinigung_(P)ss.svg': 'dry-clean-pce-very-mild',
  'Nicht_chemisch_reinigen.svg': 'do-not-dry-clean',
  // Wet cleaning
  'Professionelle_reinigung_(W).svg': 'wet-clean',
  'Professionelle_reinigung_(W)s.svg': 'wet-clean-mild',
  'Professionelle_reinigung_(W)ss.svg': 'wet-clean-very-mild',
  'Nicht_nassreinigen.svg': 'do-not-wet-clean',
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const WIKIPEDIA_ORIGIN = 'https://en.wikipedia.org';

const slugify = (str: string): string =>
  str
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Extracts the decoded Commons file name (`Waschen_30.svg`) from a `/wiki/File:…` link. */
const fileNameFromHref = (href: string): string | null => {
  const m = href.match(/\/wiki\/File:([^?#]+)/);
  return m ? decodeURIComponent(m[1]) : null;
};

/**
 * Cleans a gallery caption into a human-readable symbol name: drops
 * Wikipedia reference markers and normalises whitespace (including the
 * non-breaking spaces the article puts around units).
 */
const cleanName = (text: string): string =>
  text
    .replace(/\[\d+\]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

/** True for any section heading element or the `div.mw-heading` wrapper Wikipedia now uses. */
const isHeading = (node: ReturnType<typeof parse>): boolean => {
  const tag = node.tagName?.toLowerCase();
  if (tag && /^h[1-6]$/.test(tag)) return true;
  return tag === 'div' && (node.getAttribute('class') ?? '').includes('mw-heading');
};

// ---------------------------------------------------------------------------
// Scraping logic
// ---------------------------------------------------------------------------

/**
 * Extracts all gallery items from one section of the page, stopping at the
 * next heading of any level.
 *
 * Wikipedia gallery items appear as `<li class="gallerybox">` with an image
 * link inside `.thumb a` and a caption inside `.gallerytext`.
 */
const scrapeSection = (htmlData: ReturnType<typeof parse>, headingId: string): ScrapedSymbol[] => {
  const heading = htmlData.getElementById(headingId);
  if (!heading) return [];

  // Headings are wrapped in div.mw-heading; start after the wrapper when present.
  const start = isHeading(heading.parentNode) ? heading.parentNode : heading;
  let node = start.nextElementSibling;
  const symbols: ScrapedSymbol[] = [];

  while (node && !isHeading(node)) {
    if (node.tagName?.toLowerCase() === 'ul' && node.classNames?.includes('gallery')) {
      for (const li of node.querySelectorAll('li.gallerybox')) {
        const href = li.querySelector('.thumb a, .gallery-image-body a')?.getAttribute('href');
        const fileName = href ? fileNameFromHref(href) : null;
        const caption = cleanName(li.querySelector('.gallerytext, figcaption')?.textContent ?? '');
        if (!fileName) {
          console.warn(`  Warning: gallery item without an image link in "${headingId}"`);
          continue;
        }

        let code = CODES[fileName];
        if (!code) {
          code = slugify(caption || fileName.replace(/\.svg$/i, ''));
          console.warn(`  Warning: no code for "${fileName}"; using "${code}". Add it to CODES.`);
        }

        symbols.push({
          code,
          imageUrl: new URL(href!, WIKIPEDIA_ORIGIN).href,
          name: caption || code,
        });
      }
    }

    node = node.nextElementSibling;
  }

  return symbols;
};

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Fetches the "Laundry symbol" Wikipedia page and extracts structured symbol
 * data for all five care treatment categories.
 *
 * @returns Resolved {@link ScrapedData} containing all symbol entries.
 * @throws When the page cannot be fetched, a section is missing, or two
 *   symbols resolve to the same code.
 */
const scrape = async (): Promise<ScrapedData> => {
  const LAUNDRY_SYMBOL_URL = `${WIKIPEDIA_ORIGIN}/wiki/Laundry_symbol`;
  const response = await fetch(LAUNDRY_SYMBOL_URL, {
    headers: {
      'User-Agent': 'ginetex/0.0.0 (https://github.com/karlnorling/ginetex; build-script)',
    },
  });
  if (response.status !== 200) {
    throw new Error(`Failed to fetch Wikipedia page: ${response.status}`);
  }

  const doc = parse(await response.text());

  // Built from CATEGORIES so the output keeps the page's (and the care label's) order.
  const result = Object.fromEntries(
    CATEGORIES.map(({ category }) => [category, []]),
  ) as unknown as ScrapedData;
  const seen = new Map<string, string>();

  for (const { category, headingIds } of CATEGORIES) {
    for (const headingId of headingIds) {
      const symbols = scrapeSection(doc, headingId);
      if (symbols.length === 0) {
        throw new Error(`No symbols found under heading "${headingId}" (${category})`);
      }
      for (const symbol of symbols) {
        const previous = seen.get(symbol.code);
        if (previous) {
          throw new Error(`Duplicate code "${symbol.code}" for ${symbol.imageUrl} and ${previous}`);
        }
        seen.set(symbol.code, symbol.imageUrl ?? '');
      }
      result[category].push(...symbols);
    }
    console.log(`  ${category}: ${result[category].length} symbols`);
  }

  return result;
};

export default scrape;
