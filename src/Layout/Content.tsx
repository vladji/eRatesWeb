import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

interface ContentProps {
  children: ReactNode;
}

export const Content: FC<ContentProps> = ({ children }) => {
  return (
    <div className={styles.contentWrapper}>
      {children}
    </div>
  );
};
