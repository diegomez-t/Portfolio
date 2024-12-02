import styles from '../styles/Profil.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderOpen, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

function Profil() {
  return (
    <div className={styles.main}>
        <nav className={styles.menu}>
            <Link href='/'><FontAwesomeIcon icon={faNewspaper} className={styles.icon}/></Link> 
            <Link href='/profil'><FontAwesomeIcon icon={faUser} className={styles.icon}/></Link>
            <Link href='/projets'><FontAwesomeIcon icon={faFolderOpen} className={styles.icon}/></Link>
            <Link href='/social'><FontAwesomeIcon icon={faGithub} className={styles.icon}/></Link>
        </nav>
        <div className={styles.center}>
          <h1 className={styles.title}>CV</h1>
        </div>
    </div>
  );
}

export default Profil;