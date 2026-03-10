import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-color)',
        primary: 'var(--primary-color)',
        accent: 'var(--accent-color)',
        secondary: 'var(--secondary-color)',
      },
      fontFamily: {
        serif: ['serif'],
        sans: ['sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
        '3xl': '3rem',
        'section': '100px',
      }
    }
  },
  plugins: [],
}

