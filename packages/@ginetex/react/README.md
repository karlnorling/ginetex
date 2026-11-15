# @ginetex/react

React components (inline SVG) for the **GINETEX / ISO 3758** laundry care symbols. Tree-shakeable, fully accessible, zero runtime dependencies beyond React.

[![npm](https://img.shields.io/npm/v/@ginetex/react)](https://www.npmjs.com/package/@ginetex/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/ginetex/blob/main/LICENSE)

---

## Installation

```sh
npm install @ginetex/react
# or
yarn add @ginetex/react
```

---

## Usage

### Named components (generated)

Each care symbol is a named component in PascalCase derived from its slug ID:

```tsx
import { Wash30, DoNotTumbleDry, DoNotBleach, HandWash, IronLow } from '@ginetex/react';

export default function CareLabel() {
  return (
    <>
      <Wash30 width={64} />
      <DoNotTumbleDry width={64} />
      <DoNotBleach width={64} title="Do not bleach this garment" />
    </>
  );
}
```

### Dynamic rendering by ID

Use `SymbolById` when the symbol ID comes from an API response or user input:

```tsx
import { SymbolById } from '@ginetex/react';

<SymbolById id="wash-30" width={120} />
<SymbolById id={symbolId} width={64} height={64} />
```

Returns `null` for unrecognised IDs — no error thrown.

---

## Props

Every component and `SymbolById` accept the same props:

| Prop          | Type                  | Default              | Description                                          |
| ------------- | --------------------- | -------------------- | ---------------------------------------------------- |
| `width`       | `number \| string`    | SVG intrinsic width  | Width of the `<svg>` element                         |
| `height`      | `number \| string`    | SVG intrinsic height | Height of the `<svg>` element                        |
| `title`       | `string`              | Symbol name          | Accessible title (`<title>` inside SVG)              |
| `description` | `string`              | Symbol description   | Accessible description (`<desc>` inside SVG)         |
| `className`   | `string`              | —                    | CSS class forwarded to the root `<span>` wrapper     |
| `style`       | `React.CSSProperties` | —                    | Inline styles forwarded to the root `<span>` wrapper |

`SymbolById` also requires:

| Prop | Type     | Description                      |
| ---- | -------- | -------------------------------- |
| `id` | `string` | Symbol slug ID, e.g. `"wash-30"` |

---

## Accessibility

Every component renders `role="img"` with `aria-labelledby` pointing to a `<title>` and `<desc>` injected inside the SVG. Screen readers announce the symbol name and description automatically. Passing `aria-label` labels the `<svg>` directly instead. Ids are derived from `useId()`, so the same symbol can appear any number of times on a page.

Override defaults when needed:

```tsx
<Wash30
  width={120}
  title="Wash at 30 °C, mild cycle"
  description="Green running figure with directional arrow"
/>
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)
