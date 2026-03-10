/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './js/**/*.js',
    './script-compat.js',
  ],
  theme: {
    extend: {
      colors: {
        // Warm & Playful Primary Palette
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',  // Main brand color
          600: '#ea580c',  // Hover states
          700: '#c2410c',  // Active states
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Teal Secondary (Educational, Calming)
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',  // Accent color
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Sunny Yellow Accent (Highlights, Badges)
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',  // Highlight color
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        display: ['Fredoka', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-mobile': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    // Add @tailwindcss/forms if you want better form styling
    // require('@tailwindcss/forms'),
  ],
};
