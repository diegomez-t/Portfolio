import styles from '../styles/Projets.module.css'
import React, {useState } from 'react';
import Image from 'next/image';
import {Modal} from 'antd';

function Projets() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projetsData = [
    {title: 'Morning News', img: '/img-morningnews.png', link: 'https://morning-news-alpha.vercel.app', desc: 'MorningNews permet de consulter les dernières actualités Tech Crunch, sauvegarder vos articles préférés, et les retrouver facilement grâce à un système de compte utilisateur et une interface intuitive.'},
    {title:'Star wars', img:'/img-starwars.png', link: 'https://starwars-theme.vercel.app', desc: 'Star Wars App offre une expérience immersive dans la saga grâce à une gestion dynamique du thème en React, incluant un mode sombre pour les fans de l’univers galactique.'},
    {title:'Time Tracker', img:'/img-TimeTracker.png', desc: 'Le projet TimeTracker est une application qui permet de gérer plusieurs activités indépendantes, chacune avec son propre chronomètre, afin de suivre efficacement le temps passé sur différentes tâches.'},
    {title:'To do list', img:'/img-todolist.png', desc: 'L\'application To Do List permet de gérer efficacement les tâches quotidiennes grâce à React et Redux. Elle offre des fonctionnalités avancées pour ajouter, organiser, et suivre vos activités avec flexibilité.'},
    {title:'Memory game', img:'/memorygame.png', link: 'https://memorygame-two-sigma.vercel.app', desc: 'Le projet MemoryGame est un jeu de mémoire interactif qui utilise les concepts fondamentaux de React, tels que le cycle de vie des composants, la gestion des états, et l’inverse data flow.'},
  ]

  const showModal = (project) => {
    setCurrentProject(project);
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const projets = projetsData.map((data,i)=>{
    return (
        <div className={styles.card} key={i}>
          <Image src={data.img} alt={data.title} width={310} height={200} className={styles.img}/>
          <p className={styles.text}>{data.title}</p>
          <div className={styles.boxText}>
            <p className={styles.textI}>{data.desc}</p>
          </div>
          <button className={styles.button} onClick={() => showModal(data)}>Voir plus</button>
          <Modal
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <a href={currentProject?.link} target="_blank" rel="noopener noreferrer" loading={loading}>
                <button className={styles.button} onClick={handleOk}>Aller sur la page</button>
              </a>,
            ]}
          >
            <p className={styles.text}>{currentProject?.title}</p>
            <p className={styles.textI}>{currentProject?.desc}</p>
            <Image src={currentProject?.img} alt={currentProject?.title} width={310} height={200} className={styles.img}/>
          </Modal>
        </div>
    )
  })

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Pages web</h1>
      <div className={styles.projets}>
         {projets} 
      </div>
    </div>
  )
}

export default Projets