import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      primaryLightest: string,
      primaryLight: string,
      primaryDark: string,
      secondary: string,
      red: string,
      redLight: string,
      yellow: string,
      yellowLight: string,
      gray: string,
      grayLight: string,
      grayDark: string,
      offwhite: string,
      white: string,
      black: string
    },
    font: {
      family: {
        normal: string,
        bold: string,
        heading: string
      },
      sizes: {
        xxsmall: string,
        xsmall: string,
        small: string,
        medium: string,
        large: string,
        xlarge: string,
        xxlarge: string
      },
      weight: {
        light: number,
        normal: number,
        bold: number
      },
      height: {
        medium: number,
        heading: number
      }
    },
    spacings: {
      xxsmall: string,
      xsmall: string,
      small: string,
      medium: string,
      large: string,
      xlarge: string,
      xxlarge: string
    },
    layers: {
      base: number,
      menu: number,
      overlay: number,
      modal: number,
      alwaysOnTop: number
    },
    border: {
      radius: string,
      radiusFull: string
    },
    transition: {
      default: string,
      fast: string
    },
    shadow: {
      card: string,
      header: string
    }
  }
}

