import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsReducer } from './slices/ingredientsSlices';
import { burgerReducer } from './slices/burgerSlices';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burger: burgerReducer
});
