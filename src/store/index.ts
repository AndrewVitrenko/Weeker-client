import { configureStore } from '@reduxjs/toolkit';
import { weekerReducer, authReducer, toastReducer } from './reducers';
import { authApi } from '../services';

export const store = configureStore({
  reducer: {
    weeker: weekerReducer,
    auth: authReducer,
    toast: toastReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
