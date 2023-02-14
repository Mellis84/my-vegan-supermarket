import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialData } from 'data';
import type { Product } from 'types/interfaces/product.interfaces';
import { ProductState } from 'types/products.type';

const { products } = initialData;

const storage = localStorage.getItem('products')
  ? JSON.parse(localStorage.getItem('products') as string)
  : products;

const initialState: ProductState = {
  products: storage
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {}
  }
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
