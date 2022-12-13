import { Product } from 'types/interfaces/product.interfaces';

/**
 * Cart Types
 */

export type CartContextType = {
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  increaseQty: (product: Product) => void;
  decreaseQty: (product: Product) => void;
  clearCart: () => void;
  cartItems: Product[];
  itemCount: number;
  total: number;
};
