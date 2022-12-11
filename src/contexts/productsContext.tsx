import { createContext, useState } from 'react';
import { ProductContextType } from '~/types/products.type';
import { initialData } from 'data';

const { products } = initialData;

const storage = localStorage.getItem('products')
  ? JSON.parse(localStorage.getItem('products') as string)
  : products;

const initialState = { products: storage };

export const ProductsContext = createContext<ProductContextType | null>(null);

const ProductsContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [products] = useState(initialState);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
