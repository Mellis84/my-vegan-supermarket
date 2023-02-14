import { useAppSelector, useAppDispatch } from 'hooks';
import classNames from 'classnames';
import { getTotalPrice, checkout } from 'store/cartSlice';

import Button from 'components/elements/Button';
import CartItem from 'components/modules/CartItem';

import styles from './Cart.module.scss';

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector(getTotalPrice);
  const checkoutState = useAppSelector((state) => state.cart.checkoutState);
  const dispatch = useAppDispatch();

  function onCheckout(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(checkout());
  }

  const cartClasses = classNames({
    [styles.cart]: true,
    [styles.checkoutError]: checkoutState === 'ERROR',
    [styles.checkoutLoading]: checkoutState === 'LOADING'
  });

  return (
    <section className={cartClasses}>
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
              Total: <i>£{totalPrice}</i>
            </span>
          </div>

          <form className={styles.cartButtonGroup} onSubmit={onCheckout}>
            <Button
              buttonStyle="outline"
              onClick={() => console.log('clear cart')}
            >
              Clear cart
            </Button>

            <Button type="submit" buttonStyle="solid-primary">
              Checkout
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Cart;
