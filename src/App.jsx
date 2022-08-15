import 'react-native-gesture-handler'

import React, { useCallback, useEffect, useState } from 'react'
// import init from 'react_native_mqtt'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'

import {
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
  SpaceGrotesk_700Bold
} from '@expo-google-fonts/dev'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { extendTheme, NativeBaseProvider } from 'native-base'
import store from 'redux/store'
import { Routes } from 'routes'
import { ThemeProvider } from 'styled-components/native'
import theme from 'theme'
import { componentsNB } from 'theme/nativeBase'

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  // init({
  //   size: 10000,
  //   storageBackend: AsyncStorage,
  //   defaultExpires: 1000 * 3600 * 24,
  //   enableCache: true,
  //   reconnect: true,
  //   sync: {}
  // })

  // const client = new Paho.MQTT.Client(
  //   'broker.mqttdashboard.com',
  //   8000,
  //   'caverna@1712'
  // )

  // client.onMessageArrived = (message) => {
  //   window.alert(message.payloadString)
  // }

  // client.connect({
  //   onSuccess: () => {
  //     window.alert('onSuccess')
  //     client.subscribe('reactnative/testmqtt')
  //   },
  //   useSSL: false
  // })

  // client.onConnectionLost = (responseObject) => {
  //   if (responseObject.errorCode !== 0) {
  //     window.alert('onConnectionLost:' + responseObject.errorMessage)
  //   }
  // }

  const customFonts = {
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SpaceGrotesk_700Bold
  }

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync()
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(customFonts)
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  const themeNB = extendTheme({
    components: componentsNB
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <NativeBaseProvider theme={themeNB}>
          <ThemeProvider theme={theme}>
            <StatusBar style="dark" translucent backgroundColor="transparent" />
            <Routes />
          </ThemeProvider>
        </NativeBaseProvider>
      </Provider>
    </GestureHandlerRootView>
  )
}
