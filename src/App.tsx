import styles from 'styles/Home.module.scss';

import Layout from 'components/layout/Layout';
import Container from 'components/util/Container';
import ProductList from 'components/modules/ProductList';
import Cart from 'components/modules/Cart';

function App() {
  return (
    <Layout>
      <Container className={styles.dashboard}>
        <ProductList />
        <Cart />
      </Container>
    </Layout>
  );
}

export default App;
