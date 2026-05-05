export const fontFamilies = {
  heading: "'Museo Sans Display', 'Nunito', Georgia, sans-serif",
  body: "'Lato', sans-serif",
  mono: "'IBM Plex Mono', monospace",
} as const;

export const fontSizes = {
  body: '16px',
  h1Desktop: '32px',
  h1Mobile: '28px',
  postHeader: '30px',
  postMeta: '14px',
  primaryNav: '14px',
  secondaryNav: '12px',
  slideNav: '14px',
  widgetHeading: '18px',
  widgetBody: '14px',
  button: '20px',
  footerMenu: '14px',
  bottomBar: '14px',
} as const;

export const lineHeights = {
  body: '1.8',
  heading: '1.3',
  postHeader: '1.0',
  widget: '1.7',
} as const;

export const fontWeights = {
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  black: '900',
} as const;

export const typography = {
  fontFamilies,
  fontSizes,
  lineHeights,
  fontWeights,
} as const;
