import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import counterSlice from '../reducers/counterReducer/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store;
