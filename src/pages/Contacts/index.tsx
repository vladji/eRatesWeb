import { Section } from '../../Layout/Section';
import styles from './styles.module.scss';

export const Contacts = () => {
  return (
    <Section>
      <h1>Contact Us</h1>
      <a className={styles.link} href="mailto:vladjidev@gmail.com">vladjidev@gmail.com</a>
    </Section>
  );
};
