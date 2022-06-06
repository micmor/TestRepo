import styles from './alert.module.css';

/* eslint-disable-next-line */
export interface AlertProps {}

export function Alert(props: AlertProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Alert!</h1>
    </div>
  );
}

export default Alert;
