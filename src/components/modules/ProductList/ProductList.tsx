import { useContext } from 'react';

import styles from './ProductList.module.scss';

import { Product } from 'types/interfaces/product.interfaces';
import { ProductContextType } from 'types/products.type';
import { ProductsContext } from 'contexts/productsContext';

import ProductItem from 'components/modules/ProductItem';

const ProductList = () => {
  const { products } = useContext(ProductsContext) as ProductContextType;

  return (
    <section className={styles.productList}>
      <h2>Products</h2>

      <div className={styles.products}>
        {products && products.length ? (
          products.map((product: Product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>No Products</p>
        )}
      </div>
    </section>
  );
};

export default ProductList;
