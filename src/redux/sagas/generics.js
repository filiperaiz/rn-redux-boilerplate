import { takeEvery, put, spawn, select } from 'redux-saga/effects'
import {
  genericsActions,
  genericsSelectors,
  genericsTypes
} from 'redux/ducks/generics'

export function* fetchDataSaga() {
  try {
    yield put(
      genericsActions.fetchData({
        msg: 'Fetching data...'
      })
    )
    const state = yield select(genericsSelectors.getState)
    console.log('state ->', state)
  } catch (e) {
    yield put(
      genericsActions.failedData({
        msg: e.message
      })
    )
  }
}

function* watchFetchDataSaga() {
  yield takeEvery(genericsTypes.GENERICS_FETCH_DATA, fetchDataSaga)
}

export default function* init() {
  yield spawn(watchFetchDataSaga)
}
