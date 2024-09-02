import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#F97316',
      },
      spacing: {
        '5': '20px',
      },
      fontFamily: {
        'revalia': ['Revalia', 'cursive'],
        'urban-jungle': ['Urban Jungle', 'cursive'],
        'alex-brush': ['Alex Brush', 'cursive'],
        'graffiti': ['Permanent Marker', 'cursive'],
        'creative': ['Creative', 'sans-serif'],
        'merienda': ['Merienda', 'cursive'], // Added "Merienda" font
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        pulse: 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
}

export default config
