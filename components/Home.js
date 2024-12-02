import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
  return (
    <div className={styles.main}>
        <nav>
          <FontAwesomeIcon icon={'house'} /> 
        </nav>
        <div className={styles.center}>
          <h1 className={styles.title}>Mon Portfolio</h1>
        </div>
    </div>
  );
}

export default Home;
