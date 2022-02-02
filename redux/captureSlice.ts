import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './globalStore'

const captureSlice = createSlice({
  name: 'capture',
  initialState: {
    value: false,
  },
  reducers: {
    changeCapture: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { changeCapture } = captureSlice.actions

export const selectCaptureValue = (state: RootState) => state.capture.value

export default captureSlice.reducer
