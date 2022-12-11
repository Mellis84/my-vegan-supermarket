import { Product } from 'types/interfaces/product.interfaces';

/**
 * Cart Interfaces
 */

// Enums ------------------------------------------------------------------ //

enum CartActionType {
  ADD = 'ADD',
  REMOVE = 'REMOVE'
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
  payload: number;
}
