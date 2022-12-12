import { Product } from 'types/interfaces/product.interfaces';

/**
 * Cart Interfaces
 */

// Enums ------------------------------------------------------------------ //

export enum CartActionType {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM'
}

// Cart ------------------------------------------------------------------ //

export interface Cart {
  cartItems: Product[];
  itemCount: number;
  total: number;
}

// Cart Action ------------------------------------------------------------------ //

export interface CartAction {
  type: CartActionType;
  payload: Product;
}
