/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/web/app/**/*.{js,ts,jsx,tsx,mdx}',
    './apps/web/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        gold: 'var(--gold)',
        'gold-light': 'var(--gold-light)',
        'gold-dark': 'var(--gold-dark)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        success: 'var(--success)',
        error: 'var(--error)',
      },
    },
  },
  plugins: [],
}

