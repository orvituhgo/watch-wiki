/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import loading from '../../img/loading.svg';
import styles from '../../styles/layout/Loading.module.css';

export default function Loading(props) {
  return (
    <div className={styles.loading_container}>
      <img
        className={`${styles.loading} ${styles[props.custom]}`}
        src={loading}
        alt="Loading component"
      />
    </div>
  );
}
