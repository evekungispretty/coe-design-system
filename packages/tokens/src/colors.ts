export const brandPalette = {
  gray: '#535353',
  grayLight: '#e8e8e8',
  teal: '#1f7e98',
  navy: '#194588',
  navyDark: '#1c2f3d',
  orange: '#cc4927',
  gold: '#edba75',
  blueDeep: '#16305d',
} as const;

export const semantic = {
  primary: '#194588',
  accent: '#cc4927',
  link: '#cc4927',
  text: '#0a0a0a',
  textMuted: '#535353',
  textFaint: '#888888',
  bg: '#ffffff',
  surface: '#f8f7f5',
  border: '#e2e0dc',
} as const;

export const shell = {
  bg: '#11202b',
  sidebarBg: '#0d1a24',
  border: '#1e3347',
  text: '#c8cdd3',
  textDim: '#6b7d8a',
  hover: '#172c3c',
  active: '#1e3a50',
  accent: '#cc4927',
} as const;

/** @deprecated Do not use — flagged in color audit */
export const deprecated = {
  diviBlue: '#2ea3f2',      // replace with teal (#1f7e98)
  navyDarkTypo: '#1c2e3d',  // typo of navyDark (#1c2f3d)
  unknownCoral: '#de6561',  // unknown origin — investigate
} as const;

export const colors = {
  brand: brandPalette,
  semantic,
  shell,
} as const;
