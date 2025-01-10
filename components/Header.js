import styles from '../styles/Header.module.css';
import { Home, Person, Folder, GitHub } from '@mui/icons-material';
import { useRouter } from 'next/router';
import React, { useState } from "react";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuData = [
    {href: "/", lebel:'Home'},
    {href: '/projets', lebel:'Projets'},
    {href: "/profil", lebel:'Information'},
    {href: "/social", lebel:'Services'},
  ]
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    router.push(path);
  };
  const menu = menuData.map((data, i) => {
    return (
      <button
        key={i}
        onClick={() => handleNavigation(data.href)}
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
      <nav className={styles.menu}>
        {menu}
      </nav>
          <button className={styles.contact}>
          Contact
          </button>
    </div>
  );
}

export default Header;


