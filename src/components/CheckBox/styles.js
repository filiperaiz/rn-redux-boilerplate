import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.xlarge};
  `}
`

export const Error = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.xxsmall};
  `}
`
