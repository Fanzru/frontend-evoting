import {createSlice} from '@reduxjs/toolkit'

const calonSlice = createSlice({
    name: 'calon',
    initialState: {
        value: "0" ,
    },
    reducers: {
        changeCalon: (state,action) => {
            state.value = action.payload;
        },
    },
});

export const {changeCalon} = calonSlice.actions;

export const selectCalonValue = (state: any) => state.calon.value;

export default calonSlice.reducer;