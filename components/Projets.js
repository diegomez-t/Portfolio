import styles from '../styles/Projets.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderOpen, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';

function Projets() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };
  return (
    <div className={styles.main}>
        <nav className={styles.menu}>
          <button
            onClick={() => handleNavigation('/')}
            data-title="Home"
            className={styles.icon}
          >
            <FontAwesomeIcon icon={faNewspaper} />
          </button>
          <button
            onClick={() => handleNavigation('/profil')}
            data-title="CV"
            className={styles.icon}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button
            onClick={() => handleNavigation('/projets')}
            data-title="Projets"
            className={styles.icon}
          >
            <FontAwesomeIcon icon={faFolderOpen} />
          </button>
          <button
            onClick={() => handleNavigation('/social')}
            data-title="Github"
            className={styles.icon}
          >
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </nav>
        <div className={styles.center}>
          <h1 className={styles.title}>Projets</h1>
        </div>
    </div>
  );
}

export default Projets;