import { createSlice } from '@reduxjs/toolkit';
import { IStore } from '../interfaces';

const initialState: IStore = {
  token: '',
  error: null,
  focusedTime: null,
  tasks: [],
  currentWeek: {
    start: '',
    end: '',
  },
};

const weekerSlice = createSlice({
  name: 'weekerSlice',
  initialState,
  reducers: {},
});

export default weekerSlice.reducer;
