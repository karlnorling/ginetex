# @ginetex/core

Typed symbol data and lookup functions for the **GINETEX / ISO 3758** laundry care symbols.

[![npm](https://img.shields.io/npm/v/@ginetex/core)](https://www.npmjs.com/package/@ginetex/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/ginetex/blob/main/LICENSE)

---

## Installation

```sh
npm install @ginetex/core
# or
yarn add @ginetex/core
```

---

## Usage

```ts
import { getAllSymbols, getSymbol, getSymbolsByCategory } from '@ginetex/core';

// All symbols
const all = getAllSymbols();

// Single symbol by slug ID
const symbol = getSymbol('wash-30');
// → CareSymbol | undefined

// Symbols by category
const drying = getSymbolsByCategory('drying');
const washing = getSymbolsByCategory('washing');
```

---

## API

### `getAllSymbols(): CareSymbol[]`

Returns all care symbols.

### `getSymbol(id: string): CareSymbol | undefined`

Returns a single symbol by its slug ID (e.g. `"wash-30"`), or `undefined` if not found.

### `getSymbolsByCategory(category: CareSymbolCategory): CareSymbol[]`

Returns all symbols in a category. Categories: `"washing"`, `"bleaching"`, `"drying"`, `"ironing"`, `"professional-care"`.

---

## Types

```ts
type CareSymbolCategory = 'washing' | 'bleaching' | 'drying' | 'ironing' | 'professional-care';

interface CareSymbol {
  assets: CareSymbolAssets;
  category: CareSymbolCategory;
  code: string; // e.g. "wash-30"
  description: string; // accessible description
  id: string; // e.g. "wash-30"
  name: string; // e.g. "Wash at or below 30 °C"
  svg: string; // inline SVG markup
}

interface CareSymbolAssets {
  jpg: Record<number, string>; // size → relative path (240, 512, 768, 1024, 2048)
  png: Record<number, string>;
  svg: string; // relative path to original SVG
  webp: Record<number, string>;
}
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)
