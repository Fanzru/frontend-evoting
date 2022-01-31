import { configureStore,combineReducers } from '@reduxjs/toolkit'
import calonSlice from './calonSlice';
import submitCalonSlice from './submitCalonSlice';

export const GlobalStore = configureStore({
  reducer: combineReducers({
      calon: calonSlice,
      submit: submitCalonSlice
  }),
});

export default { GlobalStore };
