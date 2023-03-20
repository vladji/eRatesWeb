import { Link } from 'react-router-dom';
import { Section } from '../../Layout/Section';
import styles from './styles.module.scss';

export const Home = () => {
  return (
    <Section>
      <h1>eRates</h1>
      <Link className={styles.link} to="/privacy-policy">
        Privacy Policy
      </Link>
      <Link className={styles.link} to="/contacts">
        Contact Us
      </Link>
    </Section>
  );
};
