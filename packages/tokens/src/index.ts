export { colors, brandPalette, semantic, shell } from './colors';
export { typography, fontFamilies, fontSizes, lineHeights, fontWeights } from './typography';
export { spacing, layout } from './spacing';
export { radii } from './radii';
export { shadows } from './shadows';
export { motion } from './motion';
export { breakpoints } from './breakpoints';
export { zIndex } from './zIndex';

import { colors } from './colors';
import { typography } from './typography';
import { spacing, layout } from './spacing';
import { radii } from './radii';
import { shadows } from './shadows';
import { motion } from './motion';
import { breakpoints } from './breakpoints';
import { zIndex } from './zIndex';

export const tokens = {
  colors,
  typography,
  spacing,
  layout,
  radii,
  shadows,
  motion,
  breakpoints,
  zIndex,
} as const;

export default tokens;
