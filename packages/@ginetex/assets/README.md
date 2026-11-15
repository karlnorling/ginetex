# @ginetex/assets

Static image assets for the **GINETEX / ISO 3758** laundry care symbols — SVG, PNG, JPG, and WebP at five sizes (240–2048 px).

[![npm](https://img.shields.io/npm/v/@ginetex/assets)](https://www.npmjs.com/package/@ginetex/assets)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/ginetex/blob/main/LICENSE)

---

## Installation

```sh
npm install @ginetex/assets
# or
yarn add @ginetex/assets
```

---

## Directory layout

Assets are organised by category and symbol code; every file is named after its code:

```
assets/
  washing/
    wash-30/
      wash-30.svg
      wash-30_240x240.png
      wash-30_512x512.png
      wash-30_768x768.png
      wash-30_1024x1024.png
      wash-30_2048x2048.png
      wash-30_240x240.jpg
      wash-30_240x240.webp
      …
  bleaching/
    do-not-bleach/
      do-not-bleach.svg
      …
  drying/
  ironing/
  professional-care/
```

---

## Usage

### Import by path

```ts
import wash30 from '@ginetex/assets/assets/washing/wash-30/wash-30.svg';
```

### Resolve paths via the core API

```ts
import { getSymbol } from '@ginetex/core';

const symbol = getSymbol('wash-30');
if (symbol) {
  console.log(symbol.assets.svg); // 'washing/wash-30/wash-30.svg'
  console.log(symbol.assets.png[512]); // 'washing/wash-30/wash-30_512x512.png'
  console.log(symbol.assets.webp[240]); // 'washing/wash-30/wash-30_240x240.webp'
}
```

---

## Available sizes

Each raster format is generated at five sizes:

| Size | Pixels      |
| ---- | ----------- |
| xs   | 240 × 240   |
| sm   | 512 × 512   |
| md   | 768 × 768   |
| lg   | 1024 × 1024 |
| xl   | 2048 × 2048 |

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)

> laundry care symbol SVG graphics are published under free licences on Wikimedia Commons. See each symbol's Wikimedia Commons page for the specific licence of its artwork.
