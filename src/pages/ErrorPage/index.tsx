import { useRouteError, Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const ErrorPage = () => {
  const { statusText, message } = useRouteError() as { statusText: string; message: string } || {
    statusText: '',
    message: ''
  };

  return (
    <section className={styles.wrapper}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
      <Link to="/">
        Home page
      </Link>
    </section>
  );
};
