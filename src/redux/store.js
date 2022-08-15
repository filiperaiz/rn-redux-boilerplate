import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import Reactotron from '../config/reactotronConfig'
import reducer from './ducks'
import sagas from './sagas'

let sagaMonitor
let enhancers

if (__DEV__) {
  sagaMonitor = Reactotron.createSagaMonitor()
  enhancers = [Reactotron.createEnhancer()]
}

let sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const middleware = [sagaMiddleware, createLogger()]

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(middleware),
  enhancers
})

sagaMiddleware.run(sagas)

export default store
