module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['IBM Plex Sans'],
    },
    extend: {
      zIndex: {
        '-1': '-1',
       },
      spacing: {
        70: '17.5rem',
        160: '40rem',
      },
      container: false,
      minWidth: {
        '0': '0',
        '150': '150px',
        '340': '340px',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       },
      minHeight: {
        '0': '0',
        '150': '150px',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      borderColor: ['disabled'],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': { maxWidth: '640px' },
          '@screen md': { maxWidth: '1200px' },
          '@screen lg': { maxWidth: '1400px' },
        },
      })
    },
  ],
}
