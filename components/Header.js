import styles from '../styles/Header.module.css';
import {Modal} from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from "react";
import Image from 'next/image';
import { Home, Person, Folder, DoneAll, Mail, Menu } from '@mui/icons-material';


function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuData = [
    {href: "/", label:'Accueil', icon: Home},
    {href: '/projets', label:'Projets', icon: Folder},
    {href: "/profil", label:'Information', icon: Person},
    {href: "/social", label:'Services', icon: DoneAll},
  ]
  const router = useRouter();


  const handleNavigation = (path) => {
    router.push(path);
  };


const showModal = () => {
  setIsModalOpen(true);
};

const handleOk = () => {
  setIsModalOpen(false);
};


const handleCancel = () => {
  setIsModalOpen(false);
};

  const menu = menuData.map((data, i) => {
    return (
      <button
        key={i}
        onClick={() => {
          handleNavigation(data.href)
          handleCancel()
        }}
        data-title={data.label}
        className={styles.icon}
      >
        <data.icon />{data.label}
      </button>
    );
  })  
  return (
    <div className={styles.header}>
      <Image src='/logo_.png' alt='Logo' width={50} height={50}/>
      <button 
          className={styles.mobileMenuButton} 
          onClick={showModal}
        >
          <Menu/>{isModalOpen ? "Fermer" : "Menu"}
      </button>
      <nav className={`${styles.menu} ${styles.desktopMenu}`}>
        {menu}
      </nav>
      <Modal 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}
        footer={null}
      >
        {menu}
      </Modal>
      <a href="mailto:gomeztorres.diegoandres@gmail.com?subject=Demande%20d'information%20concernant%20les%20services%20de%20développement%20web/mobile%20full-stack&body=Bonjour%20Monsieur%20GOMEZ,%0A%0AVotre%20message...%0A%0ACordialement,%0A[Votre%20nom]" style={{ textDecoration: 'none' }}>
        <button className={styles.contact}><Mail/>Contact</button>
      </a>
    </div>
  );
}

export default Header;


