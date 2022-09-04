import { createSlice } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_KEYS } from '../../constants';
import { IAuthStore } from '../../interfaces';
import { authApi } from 'src/services';

const initialState: IAuthStore = {
  token: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN) ?? ' "" '),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        localStorage.setItem(
          LOCAL_STORAGE_KEYS.TOKEN,
          JSON.stringify(payload.token),
        );
      },
    );

    builder.addMatcher(
      authApi.endpoints.sigunp.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        localStorage.setItem(
          LOCAL_STORAGE_KEYS.TOKEN,
          JSON.stringify(payload.token),
        );
      },
    );
  },
});

export const authReducer = authSlice.reducer;
