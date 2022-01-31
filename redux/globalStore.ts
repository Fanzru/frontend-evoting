import { configureStore,combineReducers } from '@reduxjs/toolkit'
import calonSlice from './calonSlice';
import submitCalonSlice from './submitCalonSlice';


const GlobalStore = configureStore({
  reducer: combineReducers({
    calon: calonSlice,
    submit: submitCalonSlice
  }),
});

export type RootState = ReturnType<typeof GlobalStore.getState>

export default GlobalStore;


