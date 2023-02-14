import {
  createSlice,
  createSelector,
  createAsyncThunk
} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState, AppDispatch } from './store';
import type { CartProduct } from 'types/interfaces/product.interfaces';
import type { CartState } from 'types/cart.type';

const initialState: CartState = {
  cartItems: [],
  checkoutState: 'READY',
  itemCount: 0,
  total: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      const product = state.cartItems.find(
        (item) => item.sku === action.payload.sku
      );

      if (product) {
        product.qty && product.qty++;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const index = state.cartItems.findIndex(
        (item) => item.sku === action.payload
      );

      state.cartItems.splice(index, 1);
      // state.cartItems.filter((item) => item.sku !== action.payload);
    },
    increaseQty: (state, action: PayloadAction<string>) => {
      const product = state.cartItems.find(
        (item) => item.sku === action.payload
      );

      product.qty++;
    },
    decreaseQty: (state, action: PayloadAction<string>) => {
      const product = state.cartItems.find(
        (item) => item.sku === action.payload
      );

      if (product.qty !== 0 && product.qty !== 1) {
        product.qty--;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.itemCount = 0;
      state.total = 0;
    }
  },
  extraReducers: function (builder) {
    builder.addCase('cart/checkout/pending', (state, action) => {
      state.checkoutState = 'LOADING';
    });
    builder.addCase('cart/checkout/fulfilled', (state, action) => {
      state.checkoutState = 'READY';
    });
  }
});

export function checkout() {
  return function checkoutThunk(dispatch: AppDispatch) {
    dispatch({ type: 'cart/checkout/pending' });

    setTimeout(() => {
      dispatch({ type: 'cart/checkout/fulfilled' });
    }, 500);
  };
}

export const {
  addProduct,
  removeProduct,
  increaseQty,
  decreaseQty,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;

/**
 * Selectors
 */

export function getItemCount(state: RootState) {
  return state.cart.cartItems.reduce(
    (total, product) => total + product.qty,
    0
  );
}

// Memoized stops the whole state re-rendering whenever cartItems is updated.
export const getMemoizedItemCount = createSelector(
  (state: RootState) => state.cart.cartItems,
  (cartItems) => {
    return cartItems.reduce((total, product) => total + product.qty, 0);
  }
);

export const getTotalPrice = createSelector(
  (state: RootState) => state.cart.cartItems,
  (cartItems) => {
    const total = cartItems.reduce(
      (total, product) => total + product.price * product.qty,
      0
    );

    return total.toFixed(2);
  }
);
