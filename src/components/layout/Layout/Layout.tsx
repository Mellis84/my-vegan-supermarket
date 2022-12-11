import styles from './Layout.module.scss';
import { LayoutProps } from 'types/interfaces/component.interfaces';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

const Layout = ({ className, children, ...rest }: LayoutProps) => {
  let layoutClassName = styles.layout;

  if (className) {
    layoutClassName = `${layoutClassName} ${className}`;
  }

  return (
    <div className={layoutClassName} {...rest}>
      <Header />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
