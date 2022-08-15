import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings.medium};
  `}
`

const labelModifiers = {
  error: (theme) => css`
    color: ${theme.colors.red};
  `,
  disabled: (theme) => css`
    color: ${theme.colors.gray};
  `
}

export const Label = styled.Text`
  ${({ theme, error, disabled }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.xxsmall};
    font-weight: ${theme.font.weight.bold};

    ${!!error && labelModifiers.error(theme)}
    ${disabled && labelModifiers.disabled(theme)}
  `}
`

export const Error = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.xxsmall};
  `}
`
