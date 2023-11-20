import Link from 'next/link';
import styles from './Footer.module.scss';
import Socials from '../Socials/Socials';
import { montserrat } from '@/public/fonts/fonts';

const Footer = () => {
  return (
    <footer className={styles.footer}> 
      <div className={`${styles.footer__block} ${styles.footer__information}`}>
        <h3 className={styles.footer__title}>О компании</h3>
        <ul className={styles.footer__list}>
          <li>
            <Link href="#" className={`link`}>
              Партнёрская программа
            </Link>
          </li>
          <li>
            <Link href="#" className={`link`}>
              Вакансии
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.footer__bigmenu} `}>
        <div className={`${styles.footer__block} ${styles.footer__menu} `}>
          <h3 className={styles.footer__title}>Меню</h3>
          <ul className={styles.footer__list}>
            <li>
              <Link href="#" className={`link`}>
                Расчёт стоимости
              </Link>
            </li>
            <li>
              <Link href="#" className={`link`}>
                Услуги
              </Link>
            </li>
            <li>
              <Link href="#" className={`link`}>
                Виджеты
              </Link>
            </li>
            <li>
              <Link href="#" className={`link`}>
                Интеграции
              </Link>
            </li>
            <li>
              <Link href="#" className={`link`}>
                Наши клиенты
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.footer__block}`}>
          <h3 className={`${styles.footer__title} ${styles.footer__title_invis}`}>Меню</h3>
          <ul className={styles.footer__list}>
            <li>
              <Link href="#" className={`link`}>
                Кейсы
              </Link>
            </li>
            <li>
              <Link href="#" className={`link`}>
                Благодарственные письма
              </Link>
            </li>
            <li>
              <Link href="#" className={`link`}>
                Сертификаты
              </Link>
            </li>
            <li>
              <Link href="#" className={`link`}>
                Блог на Youtube
              </Link>
            </li>
            <li>
              <Link href="#" className={`link`}>
                Вопрос / Ответ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.footer__block} ${styles.footer__contacts}`}>
        <h3 className={styles.footer__title}>Контакты</h3>
        <p className={styles.footer__tel}>+7 555 555-55-55</p>
        <Socials isFooter={true}></Socials>
        <p className={styles.footer__address}>Москва, Путевой проезд 3с1, к 902</p>
        <div className={styles.footer__rights}>
          <p style={montserrat.style}>©WELBEX 2022. Все права защищены.</p>
          <Link style={montserrat.style} className={`${styles.footer__politics} link`} href="#">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
