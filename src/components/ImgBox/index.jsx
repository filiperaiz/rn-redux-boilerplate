import React from 'react'

import * as S from './styles'

export function ImgBox({ source, ...props }) {
  return <S.Image source={source} {...props} />
}
