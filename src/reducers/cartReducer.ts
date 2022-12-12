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

  switch (type) {
    case CartActionType.ADD_ITEM:
      if (!newCartItems.find((item) => item.sku === payload.sku)) {
        newCartItems.push({
          ...payload,
          qty: 1
        });
      }

      return {
        ...state,
        cartItems: newCartItems,
        itemCount: getItemCount(newCartItems),
        total: getTotal(newCartItems)
      };

    case CartActionType.INCREASE_QTY:
      newCartItems[itemIndex].qty += 1;

      return {
        ...state,
        cartItems: newCartItems,
        itemCount: getItemCount(newCartItems),
        total: getTotal(newCartItems)
      };

    default:
      return state;
  }
};

export default cartReducer;
