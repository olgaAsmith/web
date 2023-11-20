import Presentation from './components/Presentation/Presentation';
import styles from './page.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      <Presentation></Presentation>
    </main>
  );
};

export default Home;
