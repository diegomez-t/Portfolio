import styles from '../styles/Header.module.css';
import {Modal} from 'antd';
import { Menu } from '@mui/icons-material';
import { useRouter } from 'next/router';
import React, { useState } from "react";


function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuData = [
    {href: "/", lebel:'Home'},
    {href: '/projets', lebel:'Projets'},
    {href: "/profil", lebel:'Information'},
    {href: "/social", lebel:'Services'},
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
        data-title={data.lebel}
        className={styles.icon}
      >
        {data.lebel}
      </button>
    );
  })  
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Diego</h1>
      <button 
          className={styles.mobileMenuButton} 
          onClick={showModal}
        >
          <Menu />
      </button>
      <nav className={`${styles.menu} ${styles.desktopMenu}`}>
        {menu}
      </nav>
      <Modal 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}
        footer={(
          <button className={styles.mobileMenuButton} onClick={handleCancel}>Fermer</button>
        )}
      >
        {menu}
      </Modal>
      <button className={styles.contact}>Contact</button>
    </div>
  );
}

export default Header;


