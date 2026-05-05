import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

mkdirSync(distDir, { recursive: true });

// Figma Tokens Studio compatible JSON format
const tokens = {
  global: {
    color: {
      brand: {
        gray:      { value: '#535353', type: 'color' },
        grayLight: { value: '#e8e8e8', type: 'color' },
        teal:      { value: '#1f7e98', type: 'color' },
        navy:      { value: '#194588', type: 'color' },
        navyDark:  { value: '#1c2f3d', type: 'color' },
        orange:    { value: '#cc4927', type: 'color' },
        gold:      { value: '#edba75', type: 'color' },
        blueDeep:  { value: '#16305d', type: 'color' },
      },
      semantic: {
        primary:    { value: '{color.brand.navy}',    type: 'color' },
        accent:     { value: '{color.brand.orange}',  type: 'color' },
        link:       { value: '{color.brand.orange}',  type: 'color' },
        text:       { value: '#0a0a0a',               type: 'color' },
        textMuted:  { value: '{color.brand.gray}',    type: 'color' },
        textFaint:  { value: '#888888',               type: 'color' },
        bg:         { value: '#ffffff',               type: 'color' },
        surface:    { value: '#f8f7f5',               type: 'color' },
        border:     { value: '#e2e0dc',               type: 'color' },
      },
      shell: {
        bg:         { value: '#11202b', type: 'color' },
        sidebarBg:  { value: '#0d1a24', type: 'color' },
        border:     { value: '#1e3347', type: 'color' },
        text:       { value: '#c8cdd3', type: 'color' },
        textDim:    { value: '#6b7d8a', type: 'color' },
        hover:      { value: '#172c3c', type: 'color' },
        active:     { value: '#1e3a50', type: 'color' },
        accent:     { value: '{color.brand.orange}', type: 'color' },
      },
      deprecated: {
        diviBlue:     { value: '#2ea3f2', type: 'color', description: 'Divi default — replace with teal' },
        navyDarkTypo: { value: '#1c2e3d', type: 'color', description: 'Typo of navyDark — unify' },
        unknownCoral: { value: '#de6561', type: 'color', description: 'Unknown origin — investigate' },
      },
    },
    typography: {
      fontFamily: {
        heading: { value: "'Museo Sans Display', 'Nunito', Georgia, sans-serif", type: 'fontFamilies' },
        body:    { value: "'Lato', sans-serif", type: 'fontFamilies' },
        mono:    { value: "'IBM Plex Mono', monospace", type: 'fontFamilies' },
      },
      fontSize: {
        body:           { value: '16',  type: 'fontSizes' },
        h1Desktop:      { value: '32',  type: 'fontSizes' },
        h1Mobile:       { value: '28',  type: 'fontSizes' },
        postHeader:     { value: '30',  type: 'fontSizes' },
        postMeta:       { value: '14',  type: 'fontSizes' },
        primaryNav:     { value: '14',  type: 'fontSizes' },
        secondaryNav:   { value: '12',  type: 'fontSizes' },
        widgetHeading:  { value: '18',  type: 'fontSizes' },
        widgetBody:     { value: '14',  type: 'fontSizes' },
        button:         { value: '20',  type: 'fontSizes' },
      },
      lineHeight: {
        body:     { value: '1.8', type: 'lineHeights' },
        heading:  { value: '1.3', type: 'lineHeights' },
        post:     { value: '1.0', type: 'lineHeights' },
        widget:   { value: '1.7', type: 'lineHeights' },
      },
    },
    spacing: {
      1: { value: '4',  type: 'spacing', description: 'Icon gap, tight inline' },
      2: { value: '8',  type: 'spacing', description: 'Component inner padding' },
      3: { value: '12', type: 'spacing', description: 'List item gap' },
      4: { value: '16', type: 'spacing', description: 'Card padding' },
      5: { value: '24', type: 'spacing', description: 'Section inner gap' },
      6: { value: '32', type: 'spacing', description: 'Between sections' },
      7: { value: '48', type: 'spacing', description: 'Page section padding' },
      8: { value: '64', type: 'spacing', description: 'Hero / large section blocks' },
    },
    borderRadius: {
      none:    { value: '0',    type: 'borderRadius' },
      sm:      { value: '2',    type: 'borderRadius' },
      default: { value: '3',    type: 'borderRadius', description: 'Divi global button' },
      md:      { value: '4',    type: 'borderRadius' },
      full:    { value: '9999', type: 'borderRadius' },
    },
  },
};

writeFileSync(join(distDir, 'tokens.json'), JSON.stringify(tokens, null, 2), 'utf-8');
console.log('✓ dist/tokens.json written');
