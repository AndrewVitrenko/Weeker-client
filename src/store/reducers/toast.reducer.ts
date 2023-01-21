import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IToastStore } from 'src/interfaces';

type IShowToastPayload = Omit<IToastStore, 'open'>;

const initialState: IToastStore = {
  open: false,
  status: 'success',
  message: '',
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, { payload }: PayloadAction<IShowToastPayload>) => {
      state.open = true;
      state.message = payload.message;
      state.status = payload.status;
    },
    hideToast: state => {
      state.open = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export const toastReducer = toastSlice.reducer;
