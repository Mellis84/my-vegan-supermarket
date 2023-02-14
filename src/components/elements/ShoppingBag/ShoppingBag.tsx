import { useAppSelector } from 'hooks';
import { getMemoizedItemCount } from 'store/cartSlice';
import shoppingBag from 'images/shopping-bag.svg';

import styles from './ShoppingBag.module.scss';

const ShoppingBag = () => {
  const itemCount = useAppSelector(getMemoizedItemCount);

  return (
    <div className={styles.shoppingBag}>
      <i className={styles.cartCount}>{itemCount}</i>

      <img src={shoppingBag} alt="Shopping bag" />
    </div>
  );
};

export default ShoppingBag;
