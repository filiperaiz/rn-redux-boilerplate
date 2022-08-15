const theme = {
  colors: {
    primary: '#FF4853',
    primaryLightest: '#FFE5E7',
    primaryLight: '#FF7F87 ',
    primaryDark: '#BD2F33',
    secondary: '#135464',
    secondaryLightest: '#DAF0F5',
    secondaryLight: '#69ACBD',
    secondaryDark: '#0A2A32',
    red: '#D01515',
    redLight: '#FFEDEE',
    yellow: '#F3B71B',
    yellowLight: '#FBF2E5',
    green: '#99FFD9 ',
    greenFluorescent: '#00FF99',
    gray: '#737373',
    grayLight: '#F4F4F4',
    grayDark: '#424242', //text
    offwhite: '#F4F4F4',
    white: '#ffffff',
    black: '#222222'
  },
  font: {
    family: {
      normal: 'SourceSansPro_400Regular',
      bold: 'SourceSansPro_700Bold',
      heading: 'SpaceGrotesk_700Bold'
    },
    sizes: {
      xxsmall: '10px', // xs
      xsmall: '12px', // sm
      small: '14px', // base
      medium: '15px', // md
      large: '18px', // lg
      xlarge: '24px', // xl
      xxlarge: '30px' // xxl
    },
    weight: {
      light: 300,
      normal: 400, // base
      bold: 700
    },
    height: {
      medium: 1.4, // base
      heading: 1.2
    }
  },
  spacings: {
    xxsmall: '4px', // xxs
    xsmall: '8px', // xs
    small: '16px', // sm
    medium: '24px', // base
    large: '32px', // md
    xlarge: '48px', // lg
    xxlarge: '64px' // xlg
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  border: {
    radius: '4px',
    radiusFull: '100px'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  shadow: {
    card: '0px 1px 6px 1px rgba(115, 115, 115, 0.16)',
    cardElevated: '0px 2px 6px 2px rgba(115, 115, 115, 0.32)',
    header: '0px 1px 6px  rgba(142, 142, 142, 0.1)'
  }
}

export default theme
