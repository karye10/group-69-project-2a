module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        Darkblueptxt: 'hsl(198, 62%, 26%)',
        bluee: '#00FFFF',
        skyblue: '#87CEEB',
        electricblue: '#7DF9FF',
        brightblue: '#0096FF',
        cornflowerblue: '#6495ED',
        lightblue: '#ADD8E6',
        royalblue: '#4169E1',
        steelblue: '#4682B4',
        babyblue: '#89CFF0',
        desaturatedblue: 'hsl(212, 27%, 19%)',
        grayishblue: 'hsl(213, 9%, 39%)',
        Darkgrayishblue: 'hsl(232, 10%, 55%)',
        Grayishblue2: 'hsl(210, 4%, 67%)',
        Whiteish: 'hsl(0, 0%, 100%)',
        Softred: 'hsl(7, 99%, 70%)',
        pYellow: 'hsl(51, 100%, 49%)',
       Darkcyan: 'hsl(167, 40%, 24%)',
      moderatecyan: 'hsl(168, 34%, 41%)',
      aqua: 'rgb(4, 252, 252)',
      aqua2: 'rgb(0, 183, 255)',
      aqau3: 'rgb(65, 207, 243)',
        aqua4: 'rgb(44, 198, 236)',
        
      },
      barlow: ['barlow'],
      fraunces: ['fraunces'],

      backgroundImage: (theme) => ({
        'header-img': "url(public\img\image-header.jpg)",
      }),

      boxShadow: {
              yelloww: 'rgb(248, 248, 51)',
                redd:  'rgb(243, 97, 86)',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
