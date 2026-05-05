import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

mkdirSync(distDir, { recursive: true });

const css = `/* UF COE Design Tokens — generated from @coe/tokens */
/* Do not edit directly. Source of truth: packages/tokens/src */

:root {
  /* ── Brand Palette ── */
  --coe-gray:              #535353;
  --coe-gray-light:        #e8e8e8;
  --coe-teal:              #1f7e98;
  --coe-navy:              #194588;
  --coe-navy-dark:         #1c2f3d;
  --coe-orange:            #cc4927;
  --coe-gold:              #edba75;
  --coe-blue-deep:         #16305d;

  /* ── Semantic Colors ── */
  --color-primary:         var(--coe-navy);
  --color-accent:          var(--coe-orange);
  --color-link:            var(--coe-orange);
  --color-text:            #0a0a0a;
  --color-text-muted:      #535353;
  --color-text-faint:      #888888;
  --color-bg:              #ffffff;
  --color-surface:         #f8f7f5;
  --color-border:          #e2e0dc;

  /* ── Shell / Dark App UI ── */
  --shell-bg:              #11202b;
  --shell-sidebar-bg:      #0d1a24;
  --shell-border:          #1e3347;
  --shell-text:            #c8cdd3;
  --shell-text-dim:        #6b7d8a;
  --shell-hover:           #172c3c;
  --shell-active:          #1e3a50;
  --shell-accent:          #cc4927;

  /* ── Typography ── */
  --font-heading:          'Museo Sans Display', 'Nunito', Georgia, sans-serif;
  --font-body:             'Lato', sans-serif;
  --font-mono:             'IBM Plex Mono', monospace;

  --size-body:             16px;
  --size-h1:               32px;
  --size-h1-mobile:        28px;
  --size-post-header:      30px;
  --size-post-meta:        14px;
  --size-nav-primary:      14px;
  --size-nav-secondary:    12px;
  --size-nav-slide:        14px;
  --size-widget-heading:   18px;
  --size-widget-body:      14px;
  --size-btn:              20px;
  --size-footer-menu:      14px;
  --size-bottom-bar:       14px;

  --lh-body:               1.8;
  --lh-heading:            1.3;
  --lh-post:               1.0;
  --lh-widget:             1.7;

  /* ── Spacing ── */
  --space-1:               4px;
  --space-2:               8px;
  --space-3:               12px;
  --space-4:               16px;
  --space-5:               24px;
  --space-6:               32px;
  --space-7:               48px;
  --space-8:               64px;

  /* ── Layout ── */
  --max-width:             1600px;
  --menu-height:           66px;
  --logo-height:           54px;
  --sidebar-width:         21%;
  --nav-height:            48px;
  --shell-sidebar-width:   260px;

  /* ── Border Radius ── */
  --radius-none:           0px;
  --radius-sm:             2px;
  --radius:                3px;
  --radius-md:             4px;
  --radius-full:           9999px;

  /* ── Buttons ── */
  --btn-font-size:         20px;
  --btn-border-width:      2px;
  --btn-border-radius:     3px;
  --btn-border-color:      #ffffff;
  --btn-bg:                transparent;
  --btn-bg-hover:          rgba(255, 255, 255, 0.2);

  /* ── Breakpoints (reference only — use in @media queries) ── */
  --bp-min:                320px;
  --bp-phone:              400px;
  --bp-tablet:             768px;
  --bp-desktop:            980px;

  /* ── Motion ── */
  --duration-fast:         100ms;
  --duration:              150ms;
  --duration-slow:         250ms;
  --ease:                  cubic-bezier(0.4, 0, 0.2, 1);
}
`;

writeFileSync(join(distDir, 'tokens.css'), css, 'utf-8');
console.log('✓ dist/tokens.css written');
