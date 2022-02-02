import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './globalStore'

const fotoSlice = createSlice({
  name: 'foto',
  initialState: {
    value: "",
  },
  reducers:  {
    changeFoto: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {changeFoto} = fotoSlice.actions;

export const selectFotoValue = (state: RootState) => state.foto.value;

export default fotoSlice.reducer
