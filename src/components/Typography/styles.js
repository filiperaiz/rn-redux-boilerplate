import styled, { css } from 'styled-components/native'

const textModifiers = {
  h1: (theme, variant) => css`
    color: ${variant === 'primary'
      ? theme.colors.secondary
      : theme.colors.grayDark};
    font-size: ${theme.font.sizes.xxlarge};
    font-family: ${theme.font.family.heading};
    line-height: ${theme.font.sizes.xxlarge};
  `,
  h2: (theme, variant) => css`
    color: ${variant === 'primary'
      ? theme.colors.secondary
      : theme.colors.grayDark};
    font-size: ${theme.font.sizes.xlarge};
    font-family: ${theme.font.family.heading};
    line-height: ${theme.font.sizes.xlarge};
  `,
  h3: (theme, variant) => css`
    color: ${variant === 'primary'
      ? theme.colors.secondary
      : theme.colors.grayDark};
    font-size: ${theme.font.sizes.large};
    font-family: ${theme.font.family.heading};
    line-height: ${theme.font.sizes.large};
  `,
  h4: (theme, variant) => css`
    color: ${variant === 'primary'
      ? theme.colors.grayDark
      : theme.colors.secondary};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family.heading};
    line-height: ${theme.font.sizes.medium};
  `,
  h5: (theme, variant) => css`
    color: ${variant === 'primary'
      ? theme.colors.grayDark
      : theme.colors.secondary};
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family.heading};
    line-height: ${theme.font.sizes.small};
  `,
  h6: (theme, variant) => css`
    color: ${variant === 'primary'
      ? theme.colors.grayDark
      : theme.colors.secondary};
    font-size: ${theme.font.sizes.xsmall};
    font-family: ${theme.font.family.heading};
    line-height: ${theme.font.sizes.xsmall};
  `,
  text: (theme, variant) => css`
    color: ${variant === 'primary' ? theme.colors.grayDark : theme.colors.gray};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
  `,
  support: (theme, variant) => css`
    color: ${variant === 'primary'
      ? theme.colors.gray
      : theme.colors.secondary};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
  `,
  label: (theme, variant) => css`
    color: ${variant === 'primary' ? theme.colors.grayDark : theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.font.sizes.xsmall};
    text-transform: uppercase;
  `,
  disclaimer: (theme, variant) => css`
    color: ${variant === 'primary' ? theme.colors.grayDark : theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.font.sizes.xsmall};
  `
}

export const Text = styled.Text`
  ${({ theme, tag, variant, spacing, center }) => css`
    font-family: ${theme.font.family.normal};
    margin-bottom: ${spacing ? theme.spacings[spacing] : 0};
    text-align: ${center ? 'center' : 'left'};

    ${!!tag && textModifiers[tag](theme, variant)}
  `}
`
