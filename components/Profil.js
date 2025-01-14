import styles from '../styles/Profil.module.css';

function Profil() {

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>À propos de moi</h1>
      <div>
        <p className={styles.subText}>Développeur web et mobile full-stack passionné par la création d’applications innovantes et performantes, je combine expertise technique et créativité pour offrir des solutions sur mesure, tout en me nourrissant constamment des dernières tendances du secteur.</p>
        <h2 className={styles.text}>Mes compétences incluent :</h2>
        <ul className={styles.list}>
          <li className={styles.subText}>HTML5, CSS3, JavaScript (ES6+), TypeScript, Python</li>
          <li className={styles.subText}>React, React Native, Next.js, Material-UI, Tailwind CSS, Bootstrap, Redux, React Router, Ant Design</li>
          <li className={styles.subText}>Node.js, Express, APIs REST, MongoDB, Mongoose, bcrypt, uid2, Cloudinary</li>
          <li className={styles.subText}>Figma, Miro, Wismusical</li>
          <li className={styles.subText}>Git, GitHub, Agile (SCRUM), Trello, Jira</li>
          <li className={styles.subText}>JWT, OAuth, gestion des rôles utilisateurs</li>
          <li className={styles.subText}>Création d’interfaces adaptatives pour mobile, tablette et desktop</li>
          <li className={styles.subText}>Utilisation de services cloud (Vercel, Expo) pour déploiement continu</li>
          <li className={styles.subText}>Tests unitaires et d’intégration avec Jest et Testing Library</li>
        </ul>
        <p className={styles.subText}>Je suis passionné par l'apprentissage continu et je reste toujours à jour avec les dernières technologies web.</p>
      </div>
    </div>
  );
}

export default Profil;