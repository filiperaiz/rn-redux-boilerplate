import styled, { css } from 'styled-components/native'

const textModifiers = {
  primary: (theme) => css`
    color: ${theme.colors.primary};
  `,
  secondary: (theme) => css`
    color: ${theme.colors.secondary};
  `
}

export const Text = styled.Text`
  ${({ theme, variant, size }) => css`
    color: ${theme.colors.black};
    font-size: ${size ? theme.font.sizes[size] : theme.font.sizes.medium};

    ${!!variant && textModifiers[variant](theme)};
  `}
`
