import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import bicycleReducer from 'redux/bicycles/bicyclesReducer';

const middleware = [...getDefaultMiddleware({ serializableCheck: false })];

export const store = configureStore({
  reducer: {
    bicycles: bicycleReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});
