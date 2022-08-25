import { createSlice } from '@reduxjs/toolkit';
import { IWeekerStore } from '../../interfaces';

const initialState: IWeekerStore = {
  focusedTime: null,
  tasks: [],
  currentWeek: {
    start: '',
    end: '',
  },
};

const weekerSlice = createSlice({
  name: 'weeker',
  initialState,
  reducers: {},
});

export const weekerReducer = weekerSlice.reducer;
