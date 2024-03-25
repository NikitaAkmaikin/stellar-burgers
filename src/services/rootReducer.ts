import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsReducer } from './slices/ingredientsSlices';
import { burgerReducer } from './slices/burgerSlices';
import { newOrderReducer } from './slices/newOrder';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burger: burgerReducer,
  newOrder: newOrderReducer
});
