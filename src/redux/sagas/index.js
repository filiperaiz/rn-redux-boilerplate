import { all } from 'redux-saga/effects'

import Generics from './generics'

export default function* rootSaga() {
  yield all([Generics()])
}
