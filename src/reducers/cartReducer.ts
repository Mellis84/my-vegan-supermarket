import { Cart, CartAction } from 'types/interfaces/cart.interfaces';

const cartReducer = (state: Cart, action: CartAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cartReducer;
