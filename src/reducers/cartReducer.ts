import {
  Cart,
  CartAction,
  CartActionType
} from 'types/interfaces/cart.interfaces';
import { getItemCount, getTotal } from 'utils/helpers';

const cartReducer = (state: Cart, action: CartAction) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionType.ADD_ITEM:
      if (!state.cartItems.find((item) => item.sku === payload.sku)) {
        state.cartItems.push({
          ...payload,
          qty: 1
        });
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        itemCount: getItemCount(state.cartItems),
        total: getTotal(state.cartItems)
      };
    default:
      return state;
  }
};

export default cartReducer;
