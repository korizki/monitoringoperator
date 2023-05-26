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
    },
    // colors: {
    //   'white' : 'rgb(255,255,255)',
    //   current: 'rgb(39, 55, 77)',
    //   'basic': 'rgb(39, 55, 77)',
    //   'biru': 'rgb(25, 167, 206)',
    //   'biruhov' : 'rgb(20, 108, 148)',
    //   'merah' : 'rgb(241, 90, 89)',
    //   'hijau' : 'rgb(27, 156, 133)',
    //   'merahhov': 'rgb(210, 19, 18)', 
    //   'orange' : 'rgb(247, 147, 39)',
    //   'sub': 'rgba(157, 178, 191, 0.8)'
    // }
  },
  plugins: [],
}
