import { createSlice } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_KEYS } from 'src/constants';
import { IAuthStore } from 'src/interfaces';
import { authApi } from 'src/services';

const initialState: IAuthStore = {
  access_token: JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN) ?? ' "" ',
  ),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.access_token = '';
      localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.access_token = payload.access_token;
        localStorage.setItem(
          LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
          JSON.stringify(payload.access_token),
        );
      },
    );
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
