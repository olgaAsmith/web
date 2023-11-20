import Link from 'next/link';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import { montserrat } from '@/public/fonts/fonts';
import Navigation from '../Navigation/Navigation';
import Socials from '../Socials/Socials';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__info}>
        <Logo></Logo>
        <h2 style={montserrat.style} className={styles.header__title}>
          крупный интегратор CRM в Росcии и ещё 8 странах
        </h2>
      </div>
      <Navigation></Navigation>
      <div className={`${styles.header__contacts}`}>
        <p className={`${styles.header__tel}`}>+7 555 555-55-55</p>
        <Socials></Socials>
      </div>
    </header>
  );
};

export default Header;
