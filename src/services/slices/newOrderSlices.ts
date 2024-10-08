import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { orderBurgerApi } from '../../utils/burger-api';

export const getApiBurgerOrder = createAsyncThunk('order/new', orderBurgerApi);

type TNewOrderState = {
  order: TOrder | null;
  name: string;
  orderRequest: boolean;
};

export const initialState: TNewOrderState = {
  order: null,
  name: '',
  orderRequest: false
};

const newOrderSlice = createSlice({
  name: 'newOrder',
  initialState,
  reducers: {
    clearOrder: (state) => (state = initialState)
  },
  selectors: {
    getOrderModalDataNewOrder: (state) => state.order,
    getNameNewOrder: (state) => state.name,
    getOrderRequestNewOrder: (state) => state.orderRequest
  },
  extraReducers: (builder) => {
    builder
      .addCase(getApiBurgerOrder.pending, (state) => {
        state.orderRequest = true;
      })
      .addCase(getApiBurgerOrder.rejected, (state) => {
        state.orderRequest = false;
      })
      .addCase(getApiBurgerOrder.fulfilled, (state, action) => {
        state.orderRequest = false;
        state.order = action.payload.order;
        state.name = action.payload.name;
      });
  }
});

export const newOrderReducer = newOrderSlice.reducer;
export const { clearOrder } = newOrderSlice.actions;

export const {
  getOrderModalDataNewOrder,
  getNameNewOrder,
  getOrderRequestNewOrder
} = newOrderSlice.selectors;
