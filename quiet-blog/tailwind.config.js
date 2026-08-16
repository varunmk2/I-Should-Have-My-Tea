/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F9F6F0',
        blush: '#F4CFCF',
        teal: {
          heritage: '#3B738F',
        },
        rust: {
          terra: '#D05334',
        },
        mustard: {
          gold: '#E8B43F',
        },
        charcoal: {
          deep: '#2C2A29',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(3.5rem, 10vw, 6rem)',
        'heading-lg': 'clamp(2rem, 5vw, 3.5rem)',
        'heading-md': 'clamp(1.5rem, 4vw, 2.5rem)',
        'heading-sm': 'clamp(1.25rem, 3vw, 1.5rem)',
        'body-lg': 'clamp(1.125rem, 2vw, 1.25rem)',
        'body-base': 'clamp(1rem, 1.8vw, 1.125rem)',
        'body-sm': '0.875rem',
        caption: '0.75rem',
      },
      lineHeight: {
        tight: '0.95',
        snug: '1.1',
        normal: '1.15',
        relaxed: '1.6',
        loose: '1.85',
      },
      letterSpacing: {
        tighter: '-0.125rem',
        tight: '-0.0625rem',
        wide: '0.125rem',
        wider: '0.25rem',
      },
      maxWidth: {
        content: '1200px',
        prose: '65ch',
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '0px',
      },
      transitionDuration: {
        smooth: '250ms',
        gentle: '500ms',
      },
    },
  },
  plugins: [],
};
