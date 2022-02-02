import { RootState } from './globalStore'
import { createSlice } from '@reduxjs/toolkit'

const submitFotoSlice = createSlice({
  name: 'submitFoto',
  initialState: {
    value: false,
  },
  reducers: {
    changeSubmitFoto: (state, actions) => {
      state.value = actions.payload;
    }
  }
})

export const {changeSubmitFoto} = submitFotoSlice.actions;

export const selectSubmitFotoValue = (state: RootState) => state.submitFoto.value;

export default submitFotoSlice.reducer;