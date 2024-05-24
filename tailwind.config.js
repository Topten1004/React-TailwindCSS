/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter']
      },
      blur: {
        xs: '2px'
      },
      backdropBlur: {
        xs: '2px'
      },
      backgroundImage: {
        landing: {
          experience:
            'linear-gradient(0deg, rgba(255,255,255,0) 10% rgba(0,255,255,0.1) 20%, rgba(255,255,255,0), 90%, rgba(255,255,255,1) 100%), linear-gradient(208.02deg, rgba(249, 250, 251, 0.94) 34.4%, rgba(249, 250, 251, 0) 66.26%, rgba(249, 250, 251, 0.6486) 66.26%)'
        }
      },
      letterSpacing: {
        medium: '-0.02rem'
      },
      colors: {
        landing: {
          black: '#191919',
          black_2: '#0F0F14',
          black_3: '#383E49',
          black_4: '#26364B',
          black_5: '#4F5C6D',
          black_6: '#2B2F38',
          black_7: '#4A4B4E',
          black_8: '#363636',
          black_9: '#1C1C1D',
          black_10: '#333333',
          gray_1: '#8696A9',
          gray_2: '#858D9D',
          gray_3: '#D0D3D9',
          gray_4: '#A2A2A2',
          gray_5: '#5D6679',
          gray_6: '#75767A',
          gray_7: '#F3F5F7',
          gray_8: '#F0F1F3',
          gray_9: '#989FAD',
          gray_10: '#98A2B3',
          gray_11: '#5A6B74',
          gray_12: '#E6E6E6',
          gray_13: '#F5F3FA',
          gray_14: '#667085',
          gray_15: '#E8E9EC',
          gray_16: '#AFADAD',
          gray_17: '#EEEEEE',
          pink_1: '#E83E91'
        },
        'here-purple-50': '#D7C6FE',
        'here-purple-900': '#53389E',
        'here-gray-50': '#F9FAFB',
        'here-gray-100': '#F5F5F5',
        'here-pink-50': '#F5F3FA',
        pearl: '#D7C6FE',
        stroke: '#E6E6E6',
        primary: '#53389E',
        link: '#7F56D9',
        baseWhite: '#FFFFFF',
        lightPurple: '#F5F3FA',
        grayMd: '#858D9D',
        historic: '#F9FAFB',
        grayLight: '#98A2B3',
        body: '#5A6B74',
        grayL: '#ADB3BD',
        mainLink: '#7170BD',
        header: '#213642',
        grayMedium: '#667085',
        gray5: '#667085',
        lightGray: '#E5E7EB'
      }
    }
  },
  plugins: []
}
