import type { Config } from 'tailwindcss'
import typographyPlugin from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,md,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
  darkMode: 'class', // from: syntax-ts
  theme: {
    boxShadow: {
      sm: '0 2px 6px rgb(15 23 42 / 0.08)',
      md: '0 8px 8px rgb(15 23 42 / 0.05), 0 3px 6px rgb(15 23 42 / 0.05)',
      lg: '0 8px 15px rgb(15 23 42 / 0.08), 0 3px 6px rgb(15 23 42 / 0.08)',
      xl: '2px 11px 16px rgb(15 23 42 / 0.17), 0 1px 6px rgb(15 23 42 / 0.17), 3px 23px 24px rgb(15 23 42 / 0.17)',
    },
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      maxWidth: {
        '8xl': '88rem',
      },
      // end from syntax-ts
      colors: {
        'gruvbox-light-gray': '#393634',
        'gruvbox-lightest-gray': '#C5B597',
        'gruvbox-dark-gray': '#1D2021',
        'cover-background': '#FFF1CD',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '5rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: ['Cabinet Grotesk', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typographyPlugin],
}
export default config
