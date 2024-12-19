import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderOpen, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Home, Person, Folder, GitHub } from '@mui/icons-material';
import { useRouter } from 'next/router';


function Header() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };
  return (
    <nav className={styles.menu}>
        <button
        onClick={() => handleNavigation('/')}
        data-title="Home"
        className={styles.icon}
        >
        <Home />
        </button>
        <button
        onClick={() => handleNavigation('/profil')}
        data-title="CV"
        className={styles.icon}
        >
        <Person />
        </button>
        <button
        onClick={() => handleNavigation('/projets')}
        data-title="Projets"
        className={styles.icon}
        >
        <Folder />
        </button>
        <button
        onClick={() => handleNavigation('/social')}
        data-title="Github"
        className={styles.icon}
        >
        <GitHub />
        </button>
    </nav>
  );
}

export default Header;


