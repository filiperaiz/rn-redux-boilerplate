import React from 'react'

import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import theme from '../../theme'

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
