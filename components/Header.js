import Home from '../pages';
import styles from './Header.module.scss';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <section className={styles.headerContainer}>
        <h1>I'm Rodrigo</h1>
      </section>
    </header>
  );
};

export default Header;
