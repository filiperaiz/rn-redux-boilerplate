/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigation } from '@react-navigation/native'
import { BoxTitle } from 'components/BoxTitle'
import { Button } from 'components/Button'
import { ViewBase } from 'components/ViewBase'
import Device from 'expo-device'
import * as Location from 'expo-location'
import { genericsActionsTypes } from 'redux/ducks/generics'

import * as S from './styles'

export function Welcome() {
  const dispatch = useDispatch()
  const { msg } = useSelector((state) => state.generics)

  const navigation = useNavigation()

  const getLocation = async () => {
    if (Platform.OS === 'android' && !Device.isDevice) {
      window.alert(
        'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
      )
      return
    }

    let { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') {
      window.alert('Permission to access location was denied')
      return
    }

    let location = await Location.getCurrentPositionAsync({})

    navigation.navigate('webApp', {
      path: 'ecommerce',
      location: location
    })
  }

  useEffect(() => {
    // getLocation()
  }, [])

  const handleRedirectSignIn = () => {
    navigation.navigate('signIn')
  }

  const handleRedirectSignUp = () => {
    navigation.navigate('signUp')
  }

  return (
    <ViewBase>
      <S.Container>
        <BoxTitle title="Mudamos de nome mas seguimos aqui para te ajudar!">
          <S.Image source={require('../../assets/welcome.png')} />
        </BoxTitle>

        <Button
          title={`Redux state => ${msg}`}
          onPress={() => dispatch(genericsActionsTypes.fetchData())}
        />

        <Button title="Iniciar cadastro" onPress={handleRedirectSignUp} />

        <Button
          title="Já possuo uma conta"
          variant="secondary"
          onPress={handleRedirectSignIn}
        />
      </S.Container>
    </ViewBase>
  )
}
