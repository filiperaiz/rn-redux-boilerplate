import {
  getStatusBarHeight,
  getBottomSpace
} from 'react-native-iphone-x-helper'

import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    align-items: center;
    flex: 1;
    justify-content: center;
    padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace() + 14}px;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.black};
    font-family: ${theme.font.family.heading};
  `}
`

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    width: 200px;
    height: 56px;
    border-radius: ${theme.border.radius};
    justify-content: center;
    align-items: center;
    margin-top: ${theme.spacings.medium};
  `}
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.white};
    font-family: ${theme.font.family.bold};
  `}
`
