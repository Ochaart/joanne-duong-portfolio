module.exports = {
  mode: 'jit',
  purge: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '384px',
      'sm': '500px',
      'skills': '550px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '1xl': '1365px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather'],
        'montserrat' : ['Montserrat'],
        'openSans' : ['Open Sans'],
      },
      width: {
        'profile-2xl': '520px',
        'profile-xl': '420px',
        'profile-lg': '390px',
        'profile-sm': '280px',
        '80vw': '80vw',
        '100vw': '100vw',
      },
      height: {
        'profile-2xl': '650px',
        'profile-xl': '550px',
        'profile-lg': '500px',
        'profile-sm': '330px',
        '80vh': '80vh',
        'full': '960px',
      },
      gridTemplateColumns: {
        'overview': '1fr 1fr 2fr',
        'overview-lg': '1fr 2fr',
        'problemAndSolution-lg' : 'auto auto'
      },
      fontSize: {
        'md': ['0.95rem', '1.25rem']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
