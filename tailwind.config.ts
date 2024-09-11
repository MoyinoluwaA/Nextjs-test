import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderRadius: {
      '3xs': '0.125rem',
      '2xs': '0.25rem',
      xs: '0.375rem',
      s: '0.5rem',
      m: '0.75rem',
      l: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      full: '99px',
    },
    extend: {
      fontSize: {
        mini: ['0.688rem', { lineHeight: '1rem' }],
        xxs: ['0.75rem', { lineHeight: '1rem' }],
        xs: ['0.813rem', { lineHeight: '1rem' }],
        s: ['0.875rem', { lineHeight: '1.5rem' }],
        m: ['0.938rem', { lineHeight: '2rem' }],
        lg: ['1rem', { lineHeight: '1.5rem' }],
        xl: ['1.625rem', { lineHeight: '2.5rem' }],
      },
      colors: {
        brand: {
          black: '#000000',
          gold: '#E5B611',
          yellow: '#F5E003',
          white: '#FFFFFF',
        },
        grey: {
          50: '#F7F8FA',
          100: '#F3F3F5',
          200: '#E9E9EB',
          300: '#DFDFE1',
          400: '#D5D6D7',
          500: '#CACBCC',
          600: '#A1A3A5',
          700: '#787A7D',
          800: '#505253',
          900: '#28292A',
          950: '#141415',
        },
        orange: {
          50: '#FEF5E7',
          100: '#FBEBD0',
          200: '#F8D69A',
          300: '#F4C26C',
          400: '#F1AE3C',
          500: '#E59811',
          600: '#B97A0E',
          700: '#8A5B09',
          800: '#5B3C07',
          900: '#2F1F05',
          950: '#181002',
        },
        red: {
          50: '#FFF0F0',
          100: '#FFE3E0',
          200: '#FFC6C2',
          300: '#FFA69E',
          400: '#FF8A80',
          500: '#FF6F61',
          600: '#FF2C1A',
          700: '#D11002',
          800: '#8F0D00',
          900: '#470600',
          950: '#240300',
        },
        mutedgreen: {
          50: '#F1F6E9',
          100: '#E3EDD3',
          200: '#C6DCA8',
          300: '#AACA7C',
          400: '#8DB851',
          500: '#6C8F3A',
          600: '#57742E',
          700: '#425723',
          800: '#2C3A18',
          900: '#151D0C',
          950: '#0B0F06',
        },
        violet: {
          50: '#FDE5FF',
          100: '#FACCFD',
          200: '#F595FE',
          300: '#F063FC',
          400: '#EB30FC',
          500: '#E003F5',
          600: '#B303C5',
          700: '#850291',
          800: '#590261',
          900: '#2E0132',
          950: '#170119',
        },
        yellowgreen: {
          50: '#FDFCE7',
          100: '#FBF9D0',
          200: '#F8F19B',
          300: '#F4EB6C',
          400: '#F1E53B',
          500: '#E5D611',
          600: '#B9AE0C',
          700: '#8A810B',
          800: '#5A5507',
          900: '#2F2D04',
          950: '#191602',
        },
        slateblue: {
          50: '#FDFCE7',
          100: '#FBF9D0',
          200: '#F8F19B',
          300: '#F4EB6C',
          400: '#F1E53B',
          500: '#E5D611',
          600: '#B9AE0C',
          700: '#8A810B',
          800: '#5A5507',
          900: '#2F2D04',
          950: '#191602',
        },
        warmbiege: {
          50: '#F9F7F4',
          100: '#F7EFEA',
          200: '#EEE0D8',
          300: '#E4D1C2',
          400: '#DEC4AF',
          500: '#D5B59C',
          600: '#BF8E69',
          700: '#9A6840',
          800: '#68452C',
          900: '#342215',
          950: '#1A110B',
        },
        teal: {
          50: '#E6FFFD',
          100: '#CDFEFA',
          200: '#95FEF5',
          300: '#64FDF0',
          400: '#32FCEB',
          500: '#03F5E0',
          600: '#03C5B4',
          700: '#009286',
          800: '#036058',
          900: '#02322E',
          950: '#011917',
        },
        royalblue: {
          50: '#E7EEFD',
          100: '#CFDDFA',
          200: '#9BB9F8',
          300: '#6C97F4',
          400: '#3C75F1',
          500: '#1155E5',
          600: '#0E44B9',
          700: '#0B3389',
          800: '#08215B',
          900: '#05112F',
          950: '#010919',
        },
      },
    },
  },
  plugins: [],
};
export default config;
