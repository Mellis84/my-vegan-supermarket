import styles from './Header.module.scss';

import ShoppingBag from 'components/elements/ShoppingBag';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <b>
          My <span>Vegan</span> Supermarket
        </b>
      </a>

      <ShoppingBag />
    </header>
  );
};

export default Header;
