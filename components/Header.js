import styles from './Header.module.scss';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header id='home' className={styles.header}>
      <Navbar />
      <section className={styles.headerContainer}>
        <h1>I'm Rodrigo</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam.
        </p>
        <section className={styles.btnContainer}>
          <a href='#about'>
            <i className="fas fa-chevron-circle-down"></i>
          </a>
        </section>
      </section>
    </header>
  );
};

export default Header;
