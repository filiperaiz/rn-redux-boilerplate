import React from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback
} from 'react-native'

import { ViewScroll } from 'components/ViewScroll'

export function FormBox({ children }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ViewScroll>{children}</ViewScroll>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
