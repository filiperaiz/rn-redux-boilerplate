import styled, { css } from 'styled-components/native'

const buttonModifiers = {
  primary: (theme) => css`
    background-color: ${theme.colors.primary};
  `,
  secondary: (theme) => css`
    background: ${theme.colors.white};
    border-color: ${theme.colors.primary};
  `,
  disabled: (theme) => css`
    background-color: ${theme.colors.gray};
    border-color: ${theme.colors.gray};
  `
}

const textModifiers = {
  primary: (theme) => css`
    color: ${theme.colors.white};
  `,
  secondary: (theme) => css`
    color: ${theme.colors.primary};
  `,
  disabled: (theme) => css`
    color: ${theme.colors.white};
  `
}

export const Button = styled.TouchableOpacity`
  ${({ theme, variant, disabled }) => css`
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    height: 48px;
    align-items: center;
    border: 2px solid transparent;
    border-radius: ${theme.border.radiusFull};
    margin-bottom: ${theme.spacings.medium};
    padding-left: ${theme.spacings.small};
    padding-right: ${theme.spacings.small};

    ${!!variant && buttonModifiers[variant](theme)};
    ${disabled && buttonModifiers.disabled(theme)};
  `}
`
export const Text = styled.Text`
  ${({ theme, variant, disabled }) => css`
    text-transform: uppercase;
    font-family: ${theme.font.family.heading};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};

    ${!!variant && textModifiers[variant](theme)};
    ${disabled && textModifiers.disabled(theme)};
  `}
`
