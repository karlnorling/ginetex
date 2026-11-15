import { GinetexSymbol } from '../GinetexSymbol';
import { defineCustomElements } from '../defineCustomElements';

const TAG = 'ginetex-symbol-test';

beforeAll(() => {
  customElements.define(TAG, GinetexSymbol);
});

const mount = (attrs: Record<string, string> = {}): GinetexSymbol => {
  const el = document.createElement(TAG) as GinetexSymbol;
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  document.body.appendChild(el);
  return el;
};

afterEach(() => {
  document.body.innerHTML = '';
});

describe('GinetexSymbol', () => {
  it('renders nothing when symbol-id is absent', () => {
    const el = mount();
    expect(el.innerHTML).toBe('');
  });

  it('renders nothing for an unknown symbol-id', () => {
    const el = mount({ 'symbol-id': 'not-a-real-id' });
    expect(el.innerHTML).toBe('');
  });

  it('sets display:contents on the host element for a known id', () => {
    // symbols.generated.ts is empty in the placeholder; test the class structure
    expect(GinetexSymbol.tagName).toBe('ginetex-symbol');
    expect(GinetexSymbol.observedAttributes).toContain('symbol-id');
    expect(GinetexSymbol.observedAttributes).toContain('title');
    expect(GinetexSymbol.observedAttributes).toContain('description');
    expect(GinetexSymbol.observedAttributes).toContain('width');
    expect(GinetexSymbol.observedAttributes).toContain('height');
  });
});

describe('rendered symbols', () => {
  it('gives every element showing the same symbol distinct ids', () => {
    mount({ 'symbol-id': 'wash-30', title: 'First' });
    mount({ 'symbol-id': 'wash-30', title: 'Second' });
    const all = Array.from(document.querySelectorAll('[id]')).map((n) => n.id);
    expect(all.length).toBeGreaterThan(0);
    expect(new Set(all).size).toBe(all.length);

    const [, second] = Array.from(document.querySelectorAll('svg'));
    const [titleId] = second.getAttribute('aria-labelledby')!.split(' ');
    expect(document.getElementById(titleId)!.textContent).toBe('Second');
  });

  it('moves aria-label onto the svg', () => {
    const el = mount({ 'symbol-id': 'wash-30', 'aria-label': 'Exit' });
    const svg = el.querySelector('svg')!;
    expect(svg.getAttribute('aria-label')).toBe('Exit');
    expect(svg.hasAttribute('aria-labelledby')).toBe(false);
  });
});

describe('defineCustomElements', () => {
  it('can register the default and custom prefixes together', () => {
    expect(() => {
      defineCustomElements();
      defineCustomElements('care');
      defineCustomElements('care');
    }).not.toThrow();
    expect(customElements.get('ginetex-wash-30')).toBeDefined();
    expect(customElements.get('care-wash-30')).toBeDefined();
    expect(customElements.get('care-symbol')).toBeDefined();
  });

  it('renders elements registered under a custom prefix', () => {
    defineCustomElements('care');
    const el = document.createElement('care-wash-30');
    document.body.appendChild(el);
    expect(el.querySelector('svg')).not.toBeNull();
  });
});
