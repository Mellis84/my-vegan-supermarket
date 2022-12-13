import {
  Cart,
  CartAction,
  CartActionType
} from 'types/interfaces/cart.interfaces';
import { getItemCount, getTotal } from 'utils/helpers';

const cartReducer = (state: Cart, action: CartAction) => {
  const { type, payload } = action;
  let itemIndex = -1;
  let newCartItems = [...state.cartItems];

  if (payload) {
    itemIndex = state.cartItems.findIndex((item) => item.sku === payload.sku);
  }

  localStorage.setItem(
    'cart',
    JSON.stringify(newCartItems.length > 0 ? newCartItems : [])
  );

  switch (type) {
    case CartActionType.ADD_ITEM:
      if (itemIndex === -1 && payload) {
        newCartItems.push({
          ...payload,
          qty: 1
        });
      }

      break;

    case CartActionType.REMOVE_ITEM:
      if (itemIndex > -1 && payload) {
        newCartItems = state.cartItems.filter(
          (item) => item.sku !== payload.sku
        );
      }

      break;

    case CartActionType.INCREASE_QTY:
      if (itemIndex > -1) {
        newCartItems[itemIndex].qty += 1;
      }

      break;

    case CartActionType.DECREASE_QTY:
      const product = newCartItems[itemIndex];

      if (product.qty !== 0 && product.qty !== 1) {
        product.qty -= 1;
      }

      break;

    case CartActionType.CLEAR_ITEMS:
      localStorage.removeItem('cart');

      newCartItems = [];

      break;

    default:
      return {
        cartItems: [],
        itemCount: 0,
        total: 0
      };
  }

  return {
    ...state,
    cartItems: newCartItems,
    itemCount: getItemCount(newCartItems),
    total: getTotal(newCartItems)
  };
};

export default cartReducer;
