import { useAppSelector } from 'hooks';
import { getItemCount } from 'store/cartSlice';
import shoppingBag from 'images/shopping-bag.svg';

import styles from './ShoppingBag.module.scss';

const ShoppingBag = () => {
  const itemCount = useAppSelector(getItemCount);

  return (
    <div className={styles.shoppingBag}>
      <i className={styles.cartCount}>{itemCount}</i>

      <img src={shoppingBag} alt="Shopping bag" />
    </div>
  );
};

export default ShoppingBag;
