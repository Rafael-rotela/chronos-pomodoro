import styles from './Heading.module.css';

export function Heading(props) {
 
  return <h1 className={`${styles.color} ${styles.Heading}`}>{props.children}</h1>;
}
