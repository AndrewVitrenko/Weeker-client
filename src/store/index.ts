import { createStore } from 'redux';
import weekerReducer from './reducer';

export const store = createStore(weekerReducer);
