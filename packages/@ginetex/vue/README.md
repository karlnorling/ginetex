# @ginetex/vue

Vue 3 components (inline SVG) for the **GINETEX / ISO 3758** laundry care symbols. Tree-shakeable, fully accessible, zero runtime dependencies beyond Vue.

[![npm](https://img.shields.io/npm/v/@ginetex/vue)](https://www.npmjs.com/package/@ginetex/vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/ginetex/blob/main/LICENSE)

---

## Installation

```sh
npm install @ginetex/vue
# or
yarn add @ginetex/vue
```

---

## Usage

### Named components (generated)

```vue
<script setup>
import { Wash30, DoNotTumbleDry } from '@ginetex/vue';
</script>

<template>
  <Wash30 :width="64" />
  <DoNotTumbleDry :width="64" title="Do not tumble dry" />
</template>
```

### Dynamic rendering by ID

Use `SymbolById` when the ID comes from data rather than being known at compile time:

```vue
<script setup>
import { SymbolById } from '@ginetex/vue';
defineProps<{ symbolId: string }>();
</script>

<template>
  <SymbolById :id="symbolId" :width="120" />
</template>
```

Returns `null` for unrecognised IDs.

---

## Props

| Prop          | Type               | Default              | Description                                  |
| ------------- | ------------------ | -------------------- | -------------------------------------------- |
| `width`       | `number \| string` | SVG intrinsic width  | Width of the `<svg>` element                 |
| `height`      | `number \| string` | SVG intrinsic height | Height of the `<svg>` element                |
| `title`       | `string`           | Symbol name          | Accessible title (`<title>` inside SVG)      |
| `description` | `string`           | Symbol description   | Accessible description (`<desc>` inside SVG) |

`SymbolById` also requires:

| Prop | Type     | Description                      |
| ---- | -------- | -------------------------------- |
| `id` | `string` | Symbol slug ID, e.g. `"wash-30"` |

---

## Accessibility

Every component renders with `role="img"` and `aria-labelledby` pointing to `<title>` and `<desc>` elements injected inside the SVG. Passing an `aria-label` attribute labels the `<svg>` directly instead. Ids are unique per instance (via `useId()` on Vue 3.5+), so the same symbol can appear any number of times on a page.

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)
