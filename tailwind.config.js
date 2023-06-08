/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-color': '#162A41;',
        'lightgrey' : '#D3DEE8',
        'darkgrey' : '#7B7B7B',
      },
      spacing: {
        '405px' : '25.313rem',
        '300px' : '18.75rem',
        '350px' : '21.875rem',
        '650px' : '40.625rem',
        '425px' : '26.563rem',
        '200px' : '12.5rem',
      },
      
    },
  },
  plugins: [],
}
