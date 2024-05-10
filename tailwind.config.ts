import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#b6140e',
        highlight: '#935b52',
        'client-bg': '#faf1e8',
        'client-text': '#4c4c4c',
        'hallmark-grey': '#7f7f7f',
        'footer-desc-grey': '#a5a5a5',
        'footer-desc-black': '#181818',
        'auth-register-br': '#eee3d6',
        'auth-label': '#4c4c4c',
        'auth-inp-bg': '#f4f4f6',
        'recipe-detail-text': '#9a5829',
      },
      width: {
        'min-width': '1250px',
      },
      screens: {
        xs: '450px',
        xxs: '300px',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
    },
  },
  plugins: [],
};
export default config;
