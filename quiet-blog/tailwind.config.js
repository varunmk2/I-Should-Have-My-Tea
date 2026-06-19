/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f2f7f5',
          100: '#e4f0ea',
          200: '#c8e1d4',
          300: '#a5cbb8',
          400: '#7aaf96',
          500: '#559278',
          600: '#40755e',
          700: '#345e4c',
          800: '#2c4c3f',
          900: '#243f34',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
        sans: ['"Inter"', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-sm': ['2.2rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        'pixel': '4px',
      },
      boxShadow: {
        'pixel': '3px 3px 0px #b0c9bc',
        'pixel-coral': '3px 3px 0px #c0504a',
        'card': '0 2px 12px rgba(44,62,53,0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'ripple': 'ripple 3s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        ripple: {
          '0%, 100%': { transform: 'scaleX(1)', opacity: '0.6' },
          '50%': { transform: 'scaleX(1.04)', opacity: '1' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      },
    },
  },
  plugins: [],
}
