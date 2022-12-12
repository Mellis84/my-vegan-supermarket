import { Product } from 'types/interfaces/product.interfaces';

/**
 * Cart Types
 */

export type CartContextType = {
  addProduct: (product: Product) => void;
  increaseQty: (product: Product) => void;
  cartItems: Product[];
  itemCount: number;
  total: number;
};
