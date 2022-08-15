import React from 'react'

import { Typography } from 'components/Typography'

import * as S from './styles'

export function BoxTitle({ title, children, ...props }) {
  return (
    <S.Container {...props}>
      {children && <S.BoxImage>{children}</S.BoxImage>}

      {!!title && (
        <Typography tag="h2" center>
          {title}
        </Typography>
      )}
    </S.Container>
  )
}
