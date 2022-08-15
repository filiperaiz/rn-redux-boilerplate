import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ForgotPassword } from 'screens/ForgotPassword'
import { SignIn } from 'screens/SignIn'
import { SignUp } from 'screens/SignUp'
import { WebApp } from 'screens/WebApp'
import { WebCam } from 'screens/WebCam'
import { Welcome } from 'screens/Welcome'

const { Navigator, Screen } = createNativeStackNavigator()

export function ScreenRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: true }}>
      <Screen
        name="welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Screen
        name="signIn"
        component={SignIn}
        options={{ headerShown: true }}
      />
      <Screen
        name="signUp"
        component={SignUp}
        options={{ headerShown: true }}
      />
      <Screen
        name="forgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Screen name="webApp" component={WebApp} />
      <Screen name="webCam" component={WebCam} />
    </Navigator>
  )
}
