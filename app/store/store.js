// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import Reducer from './slice';

const store = configureStore({
  reducer: {
    data: Reducer,
  },
});

export default store;
