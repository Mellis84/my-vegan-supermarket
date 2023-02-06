import { useAppSelector } from '../../../hooks';

import { Product } from 'types/interfaces/product.interfaces';

import ProductItem from 'components/modules/ProductItem';

import styles from './ProductList.module.scss';

const ProductList = () => {
  const products = useAppSelector((state) => state.products.products);

  return (
    <section className={styles.productList}>
      <h2>Products</h2>

      <div className={styles.products}>
        {products?.map((product: Product) => (
          <ProductItem key={product.sku} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
