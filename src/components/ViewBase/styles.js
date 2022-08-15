import {
  getStatusBarHeight,
  getBottomSpace
} from 'react-native-iphone-x-helper'

import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    flex: 1;
    width: 100%;
    padding: ${getStatusBarHeight() + 32}px 16px ${getBottomSpace() + 16}px;
  `}
`
