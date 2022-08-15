import React from 'react'

import * as S from './styles'

export function Button({ title, variant = 'primary', ...props }) {
  return (
    <S.Button variant={variant} {...props}>
      <S.Text variant={variant}>{title}</S.Text>
    </S.Button>
  )
}
