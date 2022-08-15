import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
    width: 100%;
    align-items: center;
    justify-content: center;
  `}
`

export const Image = styled.Image`
  width: 175px;
  height: 82px;
`
