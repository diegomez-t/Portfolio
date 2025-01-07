import styles from '../styles/Header.module.css';
import { Home, Person, Folder, GitHub } from '@mui/icons-material';
import { useRouter } from 'next/router';


function Header() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Diego</h1>
      <nav className={styles.menu}>
          <button
          onClick={() => handleNavigation('/')}
          data-title="Home"
          className={styles.icon}
          >
          Home
          </button>
          <button
          onClick={() => handleNavigation('/projets')}
          data-title="Projets"
          className={styles.icon}
          >
          Projets
          </button>
          <button
          onClick={() => handleNavigation('/profil')}
          data-title="CV"
          className={styles.icon}
          >
          Information
          </button>
          <button
          onClick={() => handleNavigation('/social')}
          data-title="Github"
          className={styles.icon}
          >
          Services
          </button>
      </nav>
          <button className={styles.contact}>
          Contact
          </button>
    </div>
  );
}

export default Header;


