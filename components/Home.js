import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faFolderOpen, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className={styles.main}>
        <nav className={styles.menu}>
          <FontAwesomeIcon icon={faNewspaper} className={styles.icon}/> 
          <FontAwesomeIcon icon={faUser} className={styles.icon}/> 
          <FontAwesomeIcon icon={faFolderOpen} className={styles.icon}/> 
          <FontAwesomeIcon icon={faGithub} className={styles.icon}/> 
        </nav>
        <div className={styles.center}>
          <h1 className={styles.title}>Créer des expériences digitales uniques, où la performance rencontre le design.</h1>
        </div>
    </div>
  );
}

export default Home;
