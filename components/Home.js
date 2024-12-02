import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderOpen, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

function Home() {
  return (
    <div className={styles.main}>
        <nav className={styles.menu}>
          <Link href='/'><FontAwesomeIcon icon={faNewspaper} className={styles.icon}/></Link> 
          <Link href='/profil'><FontAwesomeIcon icon={faUser} className={styles.icon}/></Link>
          <Link href='/projets'><FontAwesomeIcon icon={faFolderOpen} className={styles.icon}/></Link>
          <Link href='/social'><FontAwesomeIcon icon={faGithub} className={styles.icon}/></Link>
        </nav>
        <div className={styles.center}>
          <h1 className={styles.title}>Créer des expériences digitales uniques, où la performance rencontre le design.</h1>
          <div className={styles.content}>
            <div className={styles.profil}>
              <h2>Diego GOMEZ TORRES</h2>
              {/*photo*/}
            </div>
            <div className={styles.texte}>
              <h2>Diego est un développeur web et mobile full-stack</h2>
              <p>J’ai une passion pour la conception d’applications fluides et réactives, qu’elles soient destinées au web ou aux plateformes mobiles. Ma maîtrise des technologies modernes me permet de concevoir des solutions complètes et efficaces, du design à la mise en production, en passant par la gestion des bases de données. Toujours à l’écoute des besoins utilisateurs, je m’efforce de créer des produits à la fois esthétiques et fonctionnels.</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
