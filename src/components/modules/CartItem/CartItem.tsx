import { useContext } from 'react';
import styles from './CartItem.module.scss';

import { Product } from 'types/interfaces/product.interfaces';

import Button from 'components/elements/Button';

type Props = {
  product: Product;
  increaseQty: (product: Product) => void;
  decreaseQty: (product: Product) => void;
  removeProduct: (product: Product) => void;
};

const CartItem: React.FC<Props> = ({
  product,
  increaseQty,
  decreaseQty,
  removeProduct
}) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemOptions}>
        <div className={styles.cartItemImage}>
          {product.qty >= 2 && <span>{product.qty}</span>}

          <img src={product.image} alt={product.name} />
        </div>

        <div className={styles.cartItemControls}>
          <Button buttonStyle="outline" onClick={() => decreaseQty(product)}>
            <svg
              viewBox="0 0 60.4 60.4"
              aria-controls="Decrease qty"
              aria-label="Remove"
            >
              <path
                d="M35.8,35h18.6c3.3,0,5.9-2.6,5.9-5.9c0-3.3-2.6-5.9-5.9-5.9l-18.6,0l-11.8,0l-18.1,0c-3.3,0-5.9,2.6-5.9,5.9
		C0,32.4,2.6,35,5.9,35H24L35.8,35z"
              />
            </svg>
          </Button>

          <Button buttonStyle="outline" onClick={() => increaseQty(product)}>
            <svg
              viewBox="0 0 1000 1000"
              aria-controls="Increase qty"
              aria-label="Add"
            >
              <path d="M990,500c0,56.3-45.6,101.9-101.9,101.9H601.9v286.2c0,56.3-45.6,101.9-101.9,101.9c-56.3,0-101.9-45.6-101.9-101.9V601.9H111.9C55.6,601.9,10,556.3,10,500c0-56.3,45.6-101.9,101.9-101.9h286.2V111.9C398.1,55.6,443.7,10,500,10c56.3,0,101.9,45.6,101.9,101.9v286.2h286.2C944.4,398.1,990,443.7,990,500z" />
            </svg>
          </Button>
        </div>
      </div>

      <div className={styles.cartItemDetails}>
        <h5>{product.name}</h5>

        <div className={styles.cartItemPrice}>
          <button type="button" onClick={() => removeProduct(product)}>
            Remove
          </button>

          <span>£{product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
