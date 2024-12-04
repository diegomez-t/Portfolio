import styles from '../styles/Projet.module.css';
import Image from 'next/image';

function Projet(props) {
    return (
        <div className={styles.content}>
            <Image src={props.urlToImage} alt={props.title} width={285} height={195} className={styles.img}/>
            <h4 className={styles.title}>{props.title}</h4>
        </div>
    )
}

export default Projet;
