import styles from '../styles/Social.module.css';

function Social() {

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Mes Services</h1>
      <div className={styles.content}>
        <h2 className={styles.text}>Développement Frontend</h2>
        <ul className={styles.list}>
          <li className={styles.subText}>Création de sites web modernes, responsives et optimisés.</li>
          <li className={styles.subText}>Intégration de designs à partir de maquettes (Figma).</li>
          <li className={styles.subText}>Développement d’interfaces utilisateur dynamiques avec React.</li>
          <li className={styles.subText}>Optimisation mobile pour garantir une expérience utilisateur fluide.</li>
        </ul>
        <h2 className={styles.text}>Développement Backend</h2>
        <ul className={styles.list}>
          <li className={styles.subText}>Création d’APIs REST sécurisées pour connecter vos applications.</li>
          <li className={styles.subText}>Gestion et optimisation des bases de données avec MongoDB et Mongoose.</li>
          <li className={styles.subText}>Mise en place de systèmes d’authentification utilisateur (email/password, JWT).</li>
        </ul>
        <h2 className={styles.text}>Développement Mobile</h2>
        <ul className={styles.list}>
          <li className={styles.subText}>Développement d’applications mobiles avec React Native.</li>
          <li className={styles.subText}>Intégration de fonctionnalités interactives : cartes, notifications push, formulaires.</li>
          <li className={styles.subText}>Prototypage et conception d’applications pour Android et iOS.</li>
        </ul>
        <h2 className={styles.text}>Applications sur mesure</h2>
        <ul className={styles.list}>
          <li className={styles.subText}>Développement de dashboards et outils de gestion personnalisés.</li>
          <li className={styles.subText}>Création d’applications web interactives : to-do lists, agendas, gestion de contacts.</li>
        </ul>
        <h2 className={styles.text}>Prototypage et Conception</h2>
        <ul className={styles.list}>
          <li className={styles.subText}>Réalisation de wireframes et prototypes interactifs avec Figma ou Miro.</li>
          <li className={styles.subText}>Conseil en UX/UI pour améliorer l’expérience utilisateur.</li>
        </ul>
        <h2 className={styles.text}>Déploiement et Maintenance</h2>
        <ul className={styles.list}>
          <li className={styles.subText}>Hébergement de sites et applications sur des plateformes comme Vercel.</li>
          <li className={styles.subText}>Maintenance applicative : corrections de bugs, mises à jour et optimisation des performances.</li>
          <li className={styles.subText}>Gestion des contenus multimédias via Cloudinary.</li>
        </ul>
      </div>
    </div>
  );
}

export default Social;