import { montserrat } from '@/public/fonts/fonts';
import styles from './Presentation.module.scss';

const Presentation = () => {
  return (
    <section className={styles.presentation}>
      <div className={styles.presentation__main}>
        <h1 className={styles.presentation__title}>
          Зарабатывайте больше
          <span
            className={`${styles.presentation__highlight} ${styles.presentation__highlight_block}`}
          >
            {' '}
            с WELBEX
          </span>
        </h1>
        <h2 style={montserrat.style} className={styles.presentation__subtitle}>
          Развиваем и контролируем продажи за вас
        </h2>
      </div>
      <div className={styles.presentation__features}>
        <h2 className={styles.presentation__subtitle_thin}>
          Вместе{' '}
          <span
            className={`${styles.presentation__highlight} ${styles.presentation__highlight_orange}`}
          >
            c бесплатной консультацией
          </span>{' '}
          мы дарим:
        </h2>
        <ul className={styles.presentation__list}>
          <li className={`${styles.presentation__items} ${styles.presentation__item_vidjet}`}>
            <div className={`${styles.presentation__minus}`}></div>
            <h3 className={styles.presentation__item_name}>
              <span className={styles.presentation__title_big}>Виджеты</span>
              <span className={styles.presentation__title_mini}>30 виджетов</span>
            </h3>
            <p style={montserrat.style} className={styles.presentation__item_text}>
              30 готовых решений
            </p>
          </li>
          <li className={`${styles.presentation__items} ${styles.presentation__item_dashboard}`}>
            <h3 className={styles.presentation__item_name}>
              <div className={`${styles.presentation__minus}`}></div>
              Dashboard
            </h3>
            <p style={montserrat.style} className={styles.presentation__item_text}>
              с показателями вашего бизнеса
            </p>
          </li>
          <li className={`${styles.presentation__items} ${styles.presentation__item_audit}`}>
            <div className={`${styles.presentation__minus}`}></div>
            <h3 className={styles.presentation__item_name}>Skype Аудит</h3>
            <p style={montserrat.style} className={styles.presentation__item_text}>
              отдела продаж и CRM системы
            </p>
          </li>
          <li className={`${styles.presentation__items} ${styles.presentation__item_amoCRM}`}>
            <div className={`${styles.presentation__minus}`}></div>
            <h3 className={styles.presentation__item_name}>
              <span className={styles.presentation__title_big}> 35 дней</span>
              <span className={styles.presentation__title_mini}>Месяц аmoCRM</span>
            </h3>
            <p style={montserrat.style} className={styles.presentation__item_text}>
              использования CRM
            </p>
          </li>
        </ul>
        <button className={`${styles.presentation__button} button`}>Получить консультацию</button>
      </div>
    </section>
  );
};

export default Presentation;
