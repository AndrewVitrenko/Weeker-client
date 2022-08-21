import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_KEYS } from '../../constants';
import { IAuthStore } from '../../interfaces';

const initialState: IAuthStore = {
  token: JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN) ?? ' { "token": "" } ',
  ).token,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.TOKEN,
        JSON.stringify({ token: payload }),
      );
    },
  },
});

export const { setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
