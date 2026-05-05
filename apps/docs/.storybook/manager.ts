import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const coeTheme = create({
  base: 'dark',

  // Brand
  brandTitle: 'UF COE Design System',
  brandUrl:   'https://education.ufl.edu',
  brandTarget: '_blank',

  // UI chrome — matches the dark shell from the reference HTML
  appBg:          '#0d1a24',
  appContentBg:   '#11202b',
  appPreviewBg:   '#ffffff',
  appBorderColor: '#1e3347',
  appBorderRadius: 0,

  // Toolbar
  barBg:          '#11202b',
  barTextColor:   '#6b7d8a',
  barSelectedColor: '#cc4927',
  barHoverColor:  '#c8cdd3',

  // Typography
  fontBase:  "'Lato', sans-serif",
  fontCode:  "'IBM Plex Mono', monospace",

  // Text
  textColor:        '#c8cdd3',
  textInverseColor: '#ffffff',
  textMutedColor:   '#6b7d8a',

  // Form colors
  inputBg:          '#172c3c',
  inputBorder:      '#1e3347',
  inputTextColor:   '#c8cdd3',
  inputBorderRadius: 2,

  // Color palette
  colorPrimary:   '#cc4927',
  colorSecondary: '#194588',
});

addons.setConfig({
  theme: coeTheme,
  sidebar: {
    showRoots: true,
  },
});
