import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../../../libs/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  // '@whitespace/storybook-addon-html' cannot be used ATM, because it is not compatible with Prettier > 3
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-design-token',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
