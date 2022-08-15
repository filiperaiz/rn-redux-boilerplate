import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    width: 100%;
    justify-content: center;
    align-items: center;
  `}
`

export const BoxImage = styled.View`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: ${theme.spacings.large};
  `}
`
