// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Імпортуйте ваш кореневий reducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;
