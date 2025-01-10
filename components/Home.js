import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderOpen, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';
import Image from 'next/image'; 


function Home() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Créer des expériences digitales uniques, où la performance rencontre le design.</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.image}>
          <Image
            src="/LA-CAPSULE_2024-11-28-445HD.jpg"
            alt="Portrait de Diego Gomez Torres"
            width={400} 
            height={600} 
            className={styles.innerImage}
          />
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.text}>Bonjour ! Je m’appelle Diego et je suis développeur web et mobile full-stack.</h2>
          <p className={styles.subText}>J’ai une passion pour la conception d’applications fluides et réactives, qu’elles soient destinées au web ou aux plateformes mobiles. Ma maîtrise des technologies modernes me permet de concevoir des solutions complètes et efficaces, du design à la mise en production, en passant par la gestion des bases de données. Toujours à l’écoute des besoins utilisateurs, je m’efforce de créer des produits à la fois esthétiques et fonctionnels.</p>
          <div className={styles.links}>
            <a href='https://www.linkedin.com/in/gomez-diego-dev' target="_blank" className={styles.link}>
              <Image
                src='/linkedin.png'
                alt='Link vers le Linkedin de Diego'
                width={50} 
                height={50}
              />
            </a>
            <a href='https://github.com/diegomez-t' target="_blank" className={styles.link}>
              <Image
                src='/github.png'
                alt='Link vers le GitHub de Diego'
                width={50} 
                height={50}
              />
            </a>
            <a href='https://www.instagram.com/diegogomez.dev/' target="_blank" className={styles.link}>
              <Image
                src='/instagram.png'
                alt='Link vers le Instagram de Diego'
                width={50} 
                height={50}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
