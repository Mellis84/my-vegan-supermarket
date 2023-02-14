import type { CartProduct } from 'types/interfaces/product.interfaces';

/**
 * Cart Types
 */

type CheckoutState = 'LOADING' | 'READY' | 'ERROR';

export type CartState = {
  // addProduct: (product: Product) => void;
  // removeProduct: (product: Product) => void;
  // increaseQty: (product: Product) => void;
  // decreaseQty: (product: Product) => void;
  // clearCart: () => void;
  cartItems: CartProduct[];
  checkoutState: CheckoutState;
  itemCount: number;
  total: number;
};
