import styles from '../styles/Social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderOpen, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';

function Social() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Social</h1>
    </div>
  );
}

export default Social;