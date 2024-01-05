// Assuming both store.js and functionsReducer.js are in the same directory
import { configureStore } from '@reduxjs/toolkit';
import functionsReducer from './../state/functions/functions';

export default configureStore({
  reducer: {
    todo: functionsReducer,
  },
});
