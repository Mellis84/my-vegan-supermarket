import { useContext } from 'react';

import styles from './Cart.module.scss';

import { CartContextType } from 'types/cart.type';
import { CartContext } from 'contexts/cartContext';

import CartItem from 'components/modules/CartItem';
import Button from 'components/elements/Button';

const Cart = () => {
  const {
    increaseQty,
    decreaseQty,
    cartItems,
    itemCount,
    total,
    removeProduct,
    clearCart
  } = useContext(CartContext) as CartContextType;
  const cartModifiers = { increaseQty, decreaseQty, removeProduct };

  return (
    <section className={styles.cart}>
      <div className={styles.cartWrapper}>
        <h4>Shopping Cart</h4>

        {cartItems.length > 0 ? (
          <div className={styles.cartItemList}>
            {cartItems.map((item) => (
              <CartItem key={item.sku} product={item} {...cartModifiers} />
            ))}
          </div>
        ) : (
          <h6>Your cart is empty</h6>
        )}

        <div className={styles.cartFooter}>
          <div className={styles.cartTotals}>
            <span>
              Total items: <i>{itemCount}</i>
            </span>
            <span>
              Total: <i>£{total.toFixed(2)}</i>
            </span>
          </div>

          <div className={styles.cartButtonGroup}>
            <Button buttonStyle="outline" onClick={() => clearCart()}>
              Clear cart
            </Button>

            <Button
              buttonStyle="solid-primary"
              onClick={() => alert(`Checkout Total £${total.toFixed(2)}`)}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
