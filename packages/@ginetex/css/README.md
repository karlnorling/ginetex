# @ginetex/css

CSS background-image sprite for the **GINETEX / ISO 3758** laundry care symbols — class-based display, no JavaScript required.

[![npm](https://img.shields.io/npm/v/@ginetex/css)](https://www.npmjs.com/package/@ginetex/css)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/ginetex/blob/main/LICENSE)

---

## Installation

```sh
npm install @ginetex/css
# or
yarn add @ginetex/css
```

---

## Setup

Import the stylesheet once in your entry point:

```js
import '@ginetex/css/sprite.css';
```

```css
@import '@ginetex/css/sprite.css';
```

---

## Usage

Apply a class to any block element with explicit dimensions:

```html
<span
  class="ginetex-wash-30"
  style="display:inline-block; width:64px; height:64px"
  role="img"
  aria-label="Wash at or below 30 °C"
></span>

<span
  class="ginetex-do-not-tumble-dry"
  style="display:inline-block; width:64px; height:64px"
  role="img"
  aria-label="Do not tumble dry"
></span>
```

### Programmatic class lookup

```ts
import { getCssClassName } from '@ginetex/css';

const cls = getCssClassName('wash-30'); // → 'ginetex-wash-30'
element.className = cls;
```

---

## Class name pattern

CSS class names follow the pattern `ginetex-{code}` where `{code}` is the symbol code:

| Symbol                  | CSS class                   |
| ----------------------- | --------------------------- |
| Wash at or below 30 °C  | `ginetex-wash-30`           |
| Wash at or below 40 °C  | `ginetex-wash-40`           |
| Do not tumble dry       | `ginetex-do-not-tumble-dry` |
| Do not bleach           | `ginetex-do-not-bleach`     |
| Hand wash               | `ginetex-hand-wash`         |
| Iron at low temperature | `ginetex-iron-low`          |

---

## Accessibility

CSS background-images are not exposed to the accessibility tree. Always pair the element with `role="img"` and `aria-label`:

```html
<span
  class="ginetex-wash-30"
  style="display:inline-block; width:64px; height:64px"
  role="img"
  aria-label="Wash at or below 30 °C"
  title="Wash at or below 30 °C"
></span>
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)
