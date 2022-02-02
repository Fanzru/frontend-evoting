import { configureStore,combineReducers } from '@reduxjs/toolkit'
import calonSlice from './calonSlice';
import captureSlice from './captureSlice';
import submitCalonSlice from './submitCalonSlice';

const GlobalStore = configureStore({
  reducer: combineReducers({
    calon: calonSlice,
    submit: submitCalonSlice,
    capture: captureSlice,
  }),
});

export type RootState = ReturnType<typeof GlobalStore.getState>

export default GlobalStore;


