const path = require('path');

const APP_ROOT = path.resolve(__dirname, '../');

module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
  ],
  stories: [
    path.join(APP_ROOT, 'pages/**/*.stories.tsx'),
    path.join(APP_ROOT, 'core/**/*.stories.tsx'),
    path.join(APP_ROOT, 'styles/**/*.stories.tsx'),
    path.join(APP_ROOT, 'components/**/*.stories.tsx'),
  ],
  framework: '@storybook/react',
  staticDirs: [path.join(APP_ROOT, 'public')],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    return config;
  },
};
