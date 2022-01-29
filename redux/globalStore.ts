import { configureStore,combineReducers } from '@reduxjs/toolkit'
import calonSlice from './calonSlice';

export const GlobalStore = configureStore({
  reducer: combineReducers({
      calon: calonSlice
  }),
});

export default { GlobalStore };
