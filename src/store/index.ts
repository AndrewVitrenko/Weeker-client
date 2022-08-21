import { configureStore } from '@reduxjs/toolkit';
import { weekerReducer, authReducer } from './reducers';
import { authApi } from '../services';

export const store = configureStore({
  reducer: {
    weeker: weekerReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
