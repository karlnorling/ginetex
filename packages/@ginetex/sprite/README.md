# @ginetex/sprite

SVG symbol sprite for the **GINETEX / ISO 3758** laundry care symbols — embed any symbol inline with `<use href="#id">`.

[![npm](https://img.shields.io/npm/v/@ginetex/sprite)](https://www.npmjs.com/package/@ginetex/sprite)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/ginetex/blob/main/LICENSE)

---

## Installation

```sh
npm install @ginetex/sprite
# or
yarn add @ginetex/sprite
```

---

## Usage

### External file reference (recommended)

Serve `sprite.svg` as a static file and reference any symbol by ID:

```html
<svg width="64" height="64" role="img" aria-label="Wash at or below 30 °C">
  <title>Wash at or below 30 °C</title>
  <use href="/path/to/sprite.svg#wash-30" />
</svg>
```

### Inline sprite

Embed the sprite once invisibly at the top of your document to avoid cross-origin `<use>` issues:

```html
<div aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
  <!-- paste contents of sprite.svg here -->
</div>

<!-- Reference any symbol anywhere -->
<svg width="64" height="64" role="img" aria-label="Wash at or below 30 °C">
  <title>Wash at or below 30 °C</title>
  <use href="#wash-30" />
</svg>
```

### React with bundler import

```tsx
import spriteUrl from '@ginetex/sprite/sprite.svg';

function Wash30() {
  return (
    <svg width={64} height={64} role="img" aria-label="Wash at or below 30 °C">
      <title>Wash at or below 30 °C</title>
      <use href={`${spriteUrl}#wash-30`} />
    </svg>
  );
}
```

---

## Symbol IDs

Symbol IDs are the symbol code, e.g. `wash-30` or `do-not-tumble-dry`. Use the `sprite-ids.json` file to enumerate all available IDs:

```ts
import ids from '@ginetex/sprite/sprite-ids.json';
// → string[]  e.g. ["wash-30", "wash-40", …]
```

---

## Accessibility

The sprite itself is presentational. Always add `role="img"`, `aria-label`, and a `<title>` child to each referencing `<svg>`:

```html
<svg width="64" height="64" role="img" aria-label="Do not tumble dry">
  <title>Do not tumble dry</title>
  <desc>Yellow triangle with flame symbol.</desc>
  <use href="#do-not-tumble-dry" />
</svg>
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)
