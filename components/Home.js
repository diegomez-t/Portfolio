import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderOpen, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';
import Image from 'next/image'; 


function Home() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Diego GOMEZ TORRES</h1>
      <h2 className={styles.text}>Créer des expériences digitales uniques, où la performance rencontre le design.</h2>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.image}>
          <Image
            src="/LA-CAPSULE_2024-11-28-445HD.jpg" // Chemin relatif depuis le répertoire public
            alt="Portrait de Diego Gomez Torres"
            width={400} // Largeur de l'image (ajustez selon vos besoins)
            height={600} // Hauteur de l'image (ajustez selon vos besoins)
            className={styles.innerImage}
          />
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.text}>Diego est un développeur web et mobile full-stack</h2>
          <p className={styles.text}>J’ai une passion pour la conception d’applications fluides et réactives, qu’elles soient destinées au web ou aux plateformes mobiles. Ma maîtrise des technologies modernes me permet de concevoir des solutions complètes et efficaces, du design à la mise en production, en passant par la gestion des bases de données. Toujours à l’écoute des besoins utilisateurs, je m’efforce de créer des produits à la fois esthétiques et fonctionnels.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
