/* eslint-disable no-unused-vars */
import React from 'react'

import * as S from './styles'

export function LinkInternal({
  title,
  variant = 'primary',
  onPress,
  size,
  ...props
}) {
  return (
    <S.Text variant={variant} onPress={onPress} size={size} {...props}>
      {' '}
      {title}{' '}
    </S.Text>
  )
}
