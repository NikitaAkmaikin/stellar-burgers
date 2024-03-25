import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsReducer } from './slices/ingredientsSlices';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer

  // burgerConstructor: constructorReducer
  // orders: ordersReducer,
  // user: userReducer
});
