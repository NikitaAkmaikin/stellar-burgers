import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsReducer } from './slices/ingredientsSlices';
import { burgerReducer } from './slices/burgerSlices';
import { newOrderReducer } from './slices/newOrderSlices';
import { feedsReducer } from './slices/feedsSlices';
import { ordersReducer } from './slices/orderSlices';
import { userReducer } from './slices/userSlices';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burger: burgerReducer,
  feeds: feedsReducer,
  newOrder: newOrderReducer,
  orders: ordersReducer,
  user: userReducer
});
