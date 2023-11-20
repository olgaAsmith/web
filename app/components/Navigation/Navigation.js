import Link from 'next/link';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li>
          <Link href="#" className={`link ${styles.nav__link}`}>
            Услуги
          </Link>
        </li>
        <li>
          <Link href="#" className={`link ${styles.nav__link}`}>
            Виджеты
          </Link>
        </li>
        <li>
          <Link href="#" className={`link ${styles.nav__link}`}>
            Интеграции
          </Link>
        </li>
        <li>
          <Link href="#" className={`link ${styles.nav__link}`}>
            Кейсы
          </Link>
        </li>
        <li>
          <Link href="#" className={`link ${styles.nav__link} ${styles.nav__link_invis}`}>
            Сертификаты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
