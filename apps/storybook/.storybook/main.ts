import { fileURLToPath } from 'node:url';
import path from 'path';
import remarkGfm from 'remark-gfm';
import type { StorybookConfig } from '@storybook/react-vite';

const dirname = fileURLToPath(new URL('.', import.meta.url));

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: '@storybook/react-vite',
  staticDirs: [
    { from: '../../../packages/@ginetex/assets/assets', to: '/assets' },
    { from: '../../../packages/@ginetex/sprite', to: '/assets/sprites' },
  ],
  viteFinal: (config) => {
    if (process.env.STORYBOOK_BASE_PATH) {
      config.base = process.env.STORYBOOK_BASE_PATH;
    }
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ginetex/core': path.resolve(dirname, '../../../packages/@ginetex/core/src/index.ts'),
      '@ginetex/css': path.resolve(dirname, '../../../packages/@ginetex/css/src/index.ts'),
      '@ginetex/react': path.resolve(dirname, '../../../packages/@ginetex/react/src/index.ts'),
    };
    return config;
  },
};

export default config;
