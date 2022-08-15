import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

// eslint-disable-next-line react/prop-types
const MockedNavigator = ({ component, params = {} }) => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default MockedNavigator
