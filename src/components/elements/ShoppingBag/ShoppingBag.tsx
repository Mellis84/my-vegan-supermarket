import React, { useContext } from 'react';
import styles from './ShoppingBag.module.scss';

import { CartContext } from 'contexts/cartContext';
import { CartContextType } from 'types/cart.type';

import shoppingBag from 'images/shopping-bag.svg';

const ShoppingBag = () => {
  const { itemCount } = useContext(CartContext) as CartContextType;

  return (
    <div className={styles.shoppingBag}>
      {itemCount > 0 ? <i className={styles.cartCount}>{itemCount}</i> : null}

      <img src={shoppingBag} alt="Shopping bag" />
    </div>
  );
};

export default ShoppingBag;
