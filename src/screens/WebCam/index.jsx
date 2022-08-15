import React from 'react'

import { useNavigation } from '@react-navigation/native'
import ideaImage from 'assets/idea.png'
import { ImgBox } from 'components/ImgBox'
import { ArrowRight } from 'phosphor-react-native'
import theme from 'theme'

import * as S from './styles'

export function WebCam() {
  const navigation = useNavigation()

  const onChangeRoute = () => {
    navigation.navigate('webApp', {
      path: 'entrar'
    })
  }

  return (
    <S.Wrapper>
      <ImgBox source={ideaImage} />

      <S.Title>WebCam Screen</S.Title>

      <S.Button onPress={onChangeRoute}>
        <S.ButtonText>Open WebApp Page</S.ButtonText>

        <ArrowRight size={24} weight="bold" color={theme.colors.white} />
      </S.Button>
    </S.Wrapper>
  )
}
