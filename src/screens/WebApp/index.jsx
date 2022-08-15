/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { WebView } from 'react-native-webview'

import { useNavigation, useRoute } from '@react-navigation/native'

export function WebApp() {
  const route = useRoute()

  const refWebview = useRef(null)

  const navigation = useNavigation()

  const handleWebViewNavigationStateChange = (newNavState) => {
    const { url } = newNavState
    if (!url) return

    console.log('url: ', url)
    if (url.includes('senha')) {
      // refWebview.current.injectJavaScript(redirectTo)
      navigation.navigate('webCam')

      // refWebview.current.stopLoading()
    }
  }

  return (
    <WebView
      ref={refWebview}
      source={{
        uri: `https://app-native.com.br/${route.params.path}`
      }}
      originWhitelist={['*']}
      onNavigationStateChange={handleWebViewNavigationStateChange}
    />
  )
}
