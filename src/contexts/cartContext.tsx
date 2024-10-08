import { createContext, useReducer } from 'react';
import { CartContextType } from 'types/cart.type';
import { Product } from 'types/interfaces/product.interfaces';
import { CartActionType } from 'types/interfaces/cart.interfaces';
import cartReducer from 'reducers/cartReducer';

export const CartContext = createContext<CartContextType | null>(null);

const storage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart') as string)
  : [];

const initialState = { cartItems: storage, itemCount: 0, total: 0 };

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (payload: Product) => {
    dispatch({ type: CartActionType.ADD_ITEM, payload });
  };

  const removeProduct = (payload: Product) => {
    dispatch({ type: CartActionType.REMOVE_ITEM, payload });
  };

  const increaseQty = (payload: Product) => {
    dispatch({ type: CartActionType.INCREASE_QTY, payload });
  };

  const decreaseQty = (payload: Product) => {
    dispatch({ type: CartActionType.DECREASE_QTY, payload });
  };

  const clearCart = () => {
    dispatch({ type: CartActionType.CLEAR_ITEMS });
  };

  const contextValues = {
    ...state,
    addProduct,
    removeProduct,
    increaseQty,
    decreaseQty,
    clearCart
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
