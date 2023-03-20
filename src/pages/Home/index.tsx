import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const Home = () => {
  return (
    <section className={styles.wrapper}>
      <h1>eRates</h1>
      <Link className={styles.link} to="/privacy-policy">
        Privacy Policy
      </Link>
    </section>
  );
};
