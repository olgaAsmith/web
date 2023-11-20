import Link from 'next/link';
import styles from './Socials.module.scss';

const Socials = (props) => {
  const dynamicStyle = props.isFooter ? { gap: '10px' } : {};

  return (
    <ul className={styles.socials} style={dynamicStyle}>
      <li>
        <Link href="#" className={`${styles.socials__link} ${styles.socials__link_tg} link`}></Link>
      </li>
      <li>
        <Link
          href="#"
          className={`${styles.socials__link} ${styles.socials__link_viber} link`}
        ></Link>
      </li>
      <li>
        <Link
          href="#"
          className={`${styles.socials__link} ${styles.socials__link_whatsapp} link`}
        ></Link>
      </li>
    </ul>
  );
};

export default Socials;
