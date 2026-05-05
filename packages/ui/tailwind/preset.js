/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // ── Brand Palette ──
        coe: {
          gray:      '#535353',
          'gray-light': '#e8e8e8',
          teal:      '#1f7e98',
          navy:      '#194588',
          'navy-dark': '#1c2f3d',
          orange:    '#cc4927',
          gold:      '#edba75',
          'blue-deep': '#16305d',
        },
        // ── Semantic ──
        primary:   '#194588',
        accent:    '#cc4927',
        surface:   '#f8f7f5',
        border:    '#e2e0dc',
        // ── Shell ──
        shell: {
          bg:         '#11202b',
          sidebar:    '#0d1a24',
          border:     '#1e3347',
          text:       '#c8cdd3',
          dim:        '#6b7d8a',
          hover:      '#172c3c',
          active:     '#1e3a50',
          accent:     '#cc4927',
        },
      },
      fontFamily: {
        heading: ["'Museo Sans Display'", "'Nunito'", 'Georgia', 'sans-serif'],
        body:    ["'Lato'", 'sans-serif'],
        mono:    ["'IBM Plex Mono'", 'monospace'],
      },
      fontSize: {
        'nav-primary':   ['14px', { lineHeight: '1' }],
        'nav-secondary': ['12px', { lineHeight: '1' }],
        'widget-head':   ['18px', { lineHeight: '1.3' }],
        'widget-body':   ['14px', { lineHeight: '1.7' }],
        'post-header':   ['30px', { lineHeight: '1.0' }],
        btn:             ['20px', { lineHeight: '1.4' }],
      },
      lineHeight: {
        body:    '1.8',
        heading: '1.3',
        widget:  '1.7',
      },
      spacing: {
        1:  '4px',
        2:  '8px',
        3:  '12px',
        4:  '16px',
        5:  '24px',
        6:  '32px',
        7:  '48px',
        8:  '64px',
      },
      maxWidth: {
        coe: '1600px',
      },
      borderRadius: {
        sm:   '2px',
        DEFAULT: '3px',
        md:   '4px',
      },
      borderWidth: {
        btn: '2px',
      },
      height: {
        'menu':  '66px',
        'logo':  '54px',
        'nav':   '48px',
      },
      width: {
        'shell-sidebar': '260px',
      },
      screens: {
        phone:   '400px',
        tablet:  '768px',
        desktop: '980px',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'slide-in-from-right': {
          from: { transform: 'translateX(100%)' },
          to:   { transform: 'translateX(0)' },
        },
        'slide-in-from-bottom': {
          from: { transform: 'translateY(8px)', opacity: '0' },
          to:   { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in':            'fade-in 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-right':     'slide-in-from-right 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-bottom':    'slide-in-from-bottom 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
