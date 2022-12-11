import styles from './Header.module.scss';
import shoppingBag from 'images/shopping-bag.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <b>
          My <span>Vegan</span> Supermarket
        </b>
      </a>

      <div className={styles.shoppingBag}>
        <i>1</i>
        <img src={shoppingBag} alt="Shopping bag" />
      </div>
    </header>
  );
};

export default Header;
