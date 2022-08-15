import { getBottomSpace } from 'react-native-iphone-x-helper'

import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 24
  }
})`
  width: 100%;
`
