import styled, { css } from 'styled-components/native'

export const Image = styled.Image`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
  `}
`
