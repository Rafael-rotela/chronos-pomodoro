import { TimerIcon } from 'lucide-react';
import styles from './style.module.css';

export function Logo() {
  return (
    <>
      <h1 className={styles.logo}>
        <a className={styles.logoLink} href="#">
          <TimerIcon />
          <p>Chronos</p>
        </a>
      </h1>
    </>
);
}
