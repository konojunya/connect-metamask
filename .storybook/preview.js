import * as NextImage from 'next/image';
import {MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';
import {customViewports} from './viewports.js';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  layout: 'fullscreen',
  viewport: {
    viewports: {...customViewports, ...MINIMAL_VIEWPORTS},
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
