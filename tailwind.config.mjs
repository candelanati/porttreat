import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit Variable', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        appear: {
          '0% , 50%': { opacity: '0.1' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'port-logo': 'appear .5s linear ',
      },
    },
  },
  plugins: [],
}