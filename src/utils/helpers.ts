import { Product } from 'types/interfaces/product.interfaces';

/**
 * Helpers
 * @description Helper functions used throughout the application.
 */

export const getItemCount = (array: Product[]) => {
  return array.reduce((total, product) => total + product.qty, 0);
};

export const getTotal = (array: Product[]) => {
  return array.reduce(
    (total, product) => total + product.price * product.qty,
    0
  );
};

export const isInCart = (product: Product, cartItems: Product[]) => {
  return cartItems.find((item) => item.sku === product.sku);
};
