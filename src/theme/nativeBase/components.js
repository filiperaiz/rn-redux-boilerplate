import theme from 'theme'

const components = {
  Input: {
    variants: {
      ds: () => ({
        borderWidth: '2',
        _light: {
          bg: theme.colors.white,
          borderColor: theme.colors.gray,
          color: theme.colors.black,
          _focus: {
            bg: theme.colors.secondaryLightest,
            borderColor: theme.colors.secondary
          },
          _hover: {
            bg: theme.colors.secondaryLightest,
            borderColor: theme.colors.secondary
          },
          _invalid: {
            bg: theme.colors.redLight,
            borderColor: theme.colors.red
          },
          _disabled: {
            bg: theme.colors.grayLight,
            borderColor: theme.colors.gray
          }
        }
      })
    }
  },
  Checkbox: {
    variants: {
      ds: () => ({
        borderWidth: '2',
        _light: {
          _text: {
            color: theme.colors.black
          },
          bg: theme.colors.white,
          borderColor: theme.colors.gray,
          _checked: {
            bg: theme.colors.secondary,
            borderColor: theme.colors.secondary
          },
          _hover: {
            bg: theme.colors.secondaryLightest,
            borderColor: theme.colors.secondary
          },
          _invalid: {
            bg: theme.colors.redLight,
            borderColor: theme.colors.red
          },
          _disabled: {
            bg: theme.colors.grayLight,
            borderColor: theme.colors.gray
          }
        }
      })
    }
  },
  Radio: {
    variants: {
      ds: () => ({
        borderWidth: '2',
        _light: {
          _text: {
            color: theme.colors.black
          },
          bg: theme.colors.white,
          borderColor: theme.colors.gray,
          _checked: {
            bg: theme.colors.white,
            borderColor: theme.colors.secondary,
            _icon: { color: theme.colors.secondary }
          },
          _hover: {
            bg: theme.colors.white,
            borderColor: theme.colors.secondary
          },
          _invalid: {
            bg: theme.colors.redLight,
            borderColor: theme.colors.red
          },
          _disabled: {
            bg: theme.colors.grayLight,
            borderColor: theme.colors.gray,
            _icon: { color: theme.colors.gray }
          }
        }
      })
    }
  }
}

export default components
