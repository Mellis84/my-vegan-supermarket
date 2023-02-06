import { Product } from 'types/interfaces/product.interfaces';
import { addProduct } from '../../../store/cartSlice';
import { useAppDispatch } from '../../../hooks';
// import { isInCart } from 'utils/helpers';

import Button from 'components/elements/Button';

import styles from './ProductItem.module.scss';

type Props = {
  product: Product;
};

const ProductItem: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { name, price, image, sku, weight } = product;

  return (
    <div className={styles.productItem}>
      <div className={styles.productHead}>
        <div className={styles.productImage}>
          <img src={image} alt={name} />
        </div>

        <div className={styles.productExtra}>
          <div className={styles.productRating}>
            <svg viewBox="0 0 107.1 107.1">
              <path
                d="M2.287,47.815l23.096,19.578L18.2,96.831c-1.411,5.491,4.648,9.998,9.575,6.901L53.55,87.813l25.774,15.916
		c4.79,2.955,10.844-1.408,9.576-6.902l-7.184-29.435l23.099-19.579c4.363-3.661,2.111-10.844-3.662-11.267l-30.282-2.255
		L59.464,6.266c-2.112-5.211-9.577-5.211-11.832,0L36.225,34.292L5.944,36.547C0.174,37.113-2.081,44.154,2.287,47.815z"
              />
            </svg>
            <span>5/5</span>
          </div>
          <span className={styles.productSaleBanner}>On Sale</span>
        </div>
      </div>

      <h4>{name}</h4>

      <div className={styles.productPurchase}>
        <Button
          buttonStyle="outline"
          onClick={() => {
            dispatch(addProduct({ name, price, image, sku }));
          }}
        >
          Add{' '}
          <svg viewBox="0 0 1000 1000">
            <path d="M990,500c0,56.3-45.6,101.9-101.9,101.9H601.9v286.2c0,56.3-45.6,101.9-101.9,101.9c-56.3,0-101.9-45.6-101.9-101.9V601.9H111.9C55.6,601.9,10,556.3,10,500c0-56.3,45.6-101.9,101.9-101.9h286.2V111.9C398.1,55.6,443.7,10,500,10c56.3,0,101.9,45.6,101.9,101.9v286.2h286.2C944.4,398.1,990,443.7,990,500z" />
          </svg>
        </Button>

        {/* {isInCart(product, ['asdsd', 'sdfsdf']) && (
          <Button
            buttonStyle="solid"
            onClick={() => console.log('increase qty')}
          >
            Add more{' '}
            <svg viewBox="0 0 1000 1000">
              <path d="M990,500c0,56.3-45.6,101.9-101.9,101.9H601.9v286.2c0,56.3-45.6,101.9-101.9,101.9c-56.3,0-101.9-45.6-101.9-101.9V601.9H111.9C55.6,601.9,10,556.3,10,500c0-56.3,45.6-101.9,101.9-101.9h286.2V111.9C398.1,55.6,443.7,10,500,10c56.3,0,101.9,45.6,101.9,101.9v286.2h286.2C944.4,398.1,990,443.7,990,500z" />
            </svg>
          </Button>
        )} */}

        <div className={styles.productPrice}>
          <span>£{price.toFixed(2)}</span>
          <span>/ {weight}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
