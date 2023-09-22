/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}'
  ],
  theme: {
    extend: {
      colors: {
        // primary 100 - 900
        'primary-100': 'color-mix(in srgb, var(--color-primary), white 40%)',
        'primary-200': 'color-mix(in srgb, var(--color-primary), white 20%)',
        'primary-300': 'color-mix(in srgb, var(--color-primary), white 10%)',
        'primary-400': 'var(--color-primary)',
        'primary-500': 'color-mix(in srgb, var(--color-primary), black 10%)',
        'primary-600': 'color-mix(in srgb, var(--color-primary), black 20%)',
        'primary-700': 'color-mix(in srgb, var(--color-primary), black 40%)',
        'primary-800': 'color-mix(in srgb, var(--color-primary), black 70%)'
      }
    }
  },
  plugins: []
};
