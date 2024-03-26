import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { getOrdersApi } from '@api';

export const getApiOrders = createAsyncThunk('orders/userOrders', async () => {
  const response = await getOrdersApi();
  return response;
});

type TOrders = {
  orders: TOrder[];
};

const initialState: TOrders = {
  orders: []
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getApiOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  }
});

export const ordersReducer = ordersSlice.reducer;
