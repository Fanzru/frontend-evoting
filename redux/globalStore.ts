import { configureStore,combineReducers } from '@reduxjs/toolkit'
import calonSlice from './calonSlice';
import captureSlice from './captureSlice';
import submitCalonSlice from './submitCalonSlice';
import fotoSlice from './fotoSlice';

const GlobalStore = configureStore({
  reducer: combineReducers({
    calon: calonSlice,
    submit: submitCalonSlice,
    capture: captureSlice,
    foto: fotoSlice,
  }),
});

export type RootState = ReturnType<typeof GlobalStore.getState>

export default GlobalStore;


