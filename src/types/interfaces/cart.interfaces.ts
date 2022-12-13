import { Product } from 'types/interfaces/product.interfaces';

/**
 * Cart Interfaces
 */

// Enums ------------------------------------------------------------------ //

export enum CartActionType {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREASE_QTY = 'INCREASE_QTY',
  DECREASE_QTY = 'DECREASE_QTY',
  CLEAR_ITEMS = 'CLEAR_ITEMS'
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
  payload?: Product;
}
