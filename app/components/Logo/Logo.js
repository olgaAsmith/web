import Link from 'next/link';
import styles from './Logo.module.scss';

const Logo = () => {
  return <Link href="#" className={`${styles.logo} link`}></Link>;
};

export default Logo;
