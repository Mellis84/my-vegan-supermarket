import { useAppSelector } from 'hooks';

import Button from 'components/elements/Button';
import CartItem from 'components/modules/CartItem';

import styles from './Cart.module.scss';

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  return (
    <section className={styles.cart}>
      <div className={styles.cartWrapper}>
        <h4>Shopping Cart</h4>

        {cartItems.length > 0 ? (
          <div className={styles.cartItemList}>
            {cartItems?.map((item) => (
              <CartItem key={item.sku} product={item} />
            ))}
          </div>
        ) : (
          <h6>Your cart is empty</h6>
        )}

        <div className={styles.cartFooter}>
          <div className={styles.cartTotals}>
            <span>
              Total items: <i>Item Count</i>
            </span>
            <span>
              Total: <i>£{Number(23423).toFixed(2)}</i>
            </span>
          </div>

          <div className={styles.cartButtonGroup}>
            <Button
              buttonStyle="outline"
              onClick={() => console.log('clear cart')}
            >
              Clear cart
            </Button>

            <Button
              buttonStyle="solid-primary"
              onClick={() => alert(`Your total`)}
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
