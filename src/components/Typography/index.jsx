import React from 'react'

import * as S from './styles'

export function Typography({
  children,
  tag = 'text',
  variant = 'primary',
  spacing = 'small',
  center,
  ...props
}) {
  return (
    <S.Text
      variant={variant}
      tag={tag}
      spacing={spacing}
      center={center}
      {...props}
    >
      {children}
    </S.Text>
  )
}
