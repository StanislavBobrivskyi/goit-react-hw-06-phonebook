import { createStore } from 'redux';

const initialState = {};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(rootReducer);
