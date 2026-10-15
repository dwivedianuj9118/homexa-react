/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: { center: true, padding: { DEFAULT: '1.25rem', lg: '2rem' }, screens: { '2xl': '1240px' } },
    extend: {
      colors: {
        ink: { DEFAULT: '#1d2b2e', soft: '#4f5d61', muted: '#6b7679' },
        brand: { DEFAULT: '#0f4c47', 600: '#17675f', 50: '#eef5f2', 100: '#e1ede8' },
        gold: { DEFAULT: '#c9a46a', light: '#dcc195', dark: '#85642f' },
        sand: { DEFAULT: '#f6f1e8', 200: '#ece3d3' },
        paper: '#fbf9f5',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,76,71,0.06), 0 12px 32px -16px rgba(15,76,71,0.28)',
        lift: '0 24px 48px -24px rgba(15,76,71,0.4)',
      },
      letterSpacing: { eyebrow: '0.2em' },
    },
  },
  plugins: [],
};
