import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const hideBreakpoint = 100;
  const [config, setConfig] = useState({
    visible: true,
  });

  const handleScroll = () => {
    const { innerHeight, pageYOffset } = window;
    const visible = pageYOffset < hideBreakpoint || pageYOffset > innerHeight;

    setConfig({
      visible,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [config]);

  return (
    <nav className={`${styles.navbar} ${!config.visible ? styles['navbar--hidden'] : ''}`}>
      <ul>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#resume'>Resume</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
