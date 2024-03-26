import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsReducer } from './slices/ingredientsSlices';
import { burgerReducer } from './slices/burgerSlices';
import { newOrderReducer } from './slices/newOrderSlices';
import { feedsReducer } from './slices/feedsSlices';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burger: burgerReducer,
  newOrder: newOrderReducer,
  feeds: feedsReducer
});
