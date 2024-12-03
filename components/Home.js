import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderOpen, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';


function Home() {
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
          <h1 className={styles.title}>Créer des expériences digitales uniques, où la performance rencontre le design.</h1>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.text}>Diego GOMEZ TORRES</h2>
              {/*photo*/}
            </div>
            <div className={styles.right}>
              <h2 className={styles.text}>Diego est un développeur web et mobile full-stack</h2>
              <p className={styles.text}>J’ai une passion pour la conception d’applications fluides et réactives, qu’elles soient destinées au web ou aux plateformes mobiles. Ma maîtrise des technologies modernes me permet de concevoir des solutions complètes et efficaces, du design à la mise en production, en passant par la gestion des bases de données. Toujours à l’écoute des besoins utilisateurs, je m’efforce de créer des produits à la fois esthétiques et fonctionnels.</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
