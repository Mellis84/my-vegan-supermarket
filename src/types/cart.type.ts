import type { CartProduct } from 'types/interfaces/product.interfaces';

/**
 * Cart Types
 */

export type CartState = {
  // addProduct: (product: Product) => void;
  // removeProduct: (product: Product) => void;
  // increaseQty: (product: Product) => void;
  // decreaseQty: (product: Product) => void;
  // clearCart: () => void;
  cartItems: CartProduct[];
  itemCount: number;
  total: number;
};
