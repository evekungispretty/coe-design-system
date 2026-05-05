import type { Preview } from '@storybook/react';
import '../stories/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white',     value: '#ffffff' },
        { name: 'surface',   value: '#f8f7f5' },
        { name: 'navy-dark', value: '#1c2f3d' },
        { name: 'shell',     value: '#11202b' },
      ],
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;
