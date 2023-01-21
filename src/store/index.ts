import { configureStore } from '@reduxjs/toolkit';

import { authApi } from '../services';

import { authReducer, toastReducer, weekerReducer } from './reducers';

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
