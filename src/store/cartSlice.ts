import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './store';
import type { CartProduct } from 'types/interfaces/product.interfaces';
import type { CartState } from 'types/cart.type';

const initialState: CartState = {
  cartItems: [],
  itemCount: 0,
  total: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      const itemInCart = state.cartItems.find(
        (item) => item.sku === action.payload.sku
      );

      if (itemInCart) {
        itemInCart.qty && itemInCart.qty++;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
    },
    removeProduct: (state) => {},
    increaseQty: (state, action: PayloadAction<number>) => {},
    decreaseQty: (state) => {},
    clearCart: (state) => {
      state.cartItems = [];
      state.itemCount = 0;
      state.total = 0;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  addProduct,
  removeProduct,
  increaseQty,
  decreaseQty,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;

export function getItemCount(state: RootState) {
  return state.cart.cartItems.reduce(
    (total, product) => total + product.qty,
    0
  );
}
