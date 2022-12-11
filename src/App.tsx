import Layout from 'components/layout/Layout';
import Container from 'components/util/Container';
import ProductList from 'components/modules/ProductList';
import Cart from 'components/modules/Cart';

function App() {
  return (
    <Layout>
      <Container>
        <ProductList />
        <Cart />
      </Container>
    </Layout>
  );
}

export default App;
