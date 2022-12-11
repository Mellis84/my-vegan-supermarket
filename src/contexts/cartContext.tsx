import { createContext, useReducer } from 'react';
import { CartContextType } from 'types/cart.type';
import cartReducer from 'reducers/cartReducer';

const storage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart') as string)
  : [];

const initialState = { cartItems: storage, itemCount: 0, total: 0 };

export const CartContext = createContext<CartContextType | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const contextValues = {
    ...state
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
