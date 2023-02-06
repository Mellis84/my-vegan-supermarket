import { createSlice } from '@reduxjs/toolkit';

import { initialData } from 'data';
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
  reducers: {}
});

export default productsSlice.reducer;
