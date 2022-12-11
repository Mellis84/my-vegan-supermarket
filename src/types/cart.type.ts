import { Product } from 'types/interfaces/product.interfaces';

/**
 * Cart Types
 */

export type CartContextType = {
  cartItems: Product[];
  itemCount: number;
  total: number;
};
