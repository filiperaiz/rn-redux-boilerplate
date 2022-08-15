import { createSlice } from '@reduxjs/toolkit'

const reducerName = 'generics'

export const genericsTypes = {
  GENERICS_FETCH_DATA: `${reducerName}/FETCH_DATA`,
  GENERICS_FETCH_FAILED: `${reducerName}/FETCH_FAILED`
}

export const genericsActionsTypes = {
  fetchData: () => ({
    type: genericsTypes.GENERICS_FETCH_DATA
  }),
  fetchFailed: (payload = {}) => ({
    type: genericsTypes.GENERICS_FETCH_FAILED,
    payload
  })
}

export const genericsSelectors = {
  getState: (state) => state[reducerName]
}

const initialState = {
  msg: 'initial'
}

const genericsSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    fetchData: (state, action) => {
      return {
        ...state,
        msg: action.payload.msg
      }
    },
    failedData: (state, action) => {
      return {
        ...state,
        msg: action.payload.msg
      }
    }
  }
})

export const genericsActions = genericsSlice.actions

export default genericsSlice.reducer
