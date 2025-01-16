import styles from '../styles/Projets.module.css'
import React, {useState } from 'react';
import Image from 'next/image';
import {Modal} from 'antd';

function Projets() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projetsWebData = [
    {
      title: 'Morning News', 
      techs:['React', 'Redux', 'Redux-Persist', 'JavaScript (ES6+)', 'CSS', 'Node.js et Yarn', 'Express.js', 'Nodemon'], 
      img: '/img-morningnews.png', 
      img2:'/morningnews2.png', 
      link: 'https://morning-news-alpha.vercel.app', 
      desc: 'MorningNews permet de consulter les dernières actualités Tech Crunch, sauvegarder vos articles préférés, et les retrouver facilement grâce à un système de compte utilisateur et une interface intuitive.',
    },
    {
      title:'Star wars', 
      techs:['React', 'Tailwind CSS', 'JavaScript (ES6+)'], 
      img:'/img-starwars.png', 
      img2:'/themestarwars2.png', 
      link: 'https://starwars-theme.vercel.app', 
      desc: 'Star Wars App offre une expérience immersive dans la saga grâce à une gestion dynamique du thème en React, incluant un mode sombre pour les fans de l’univers galactique.',
    },
    {
      title:'Time Tracker', 
      techs:['React', 'Redux', 'Redux-Persist', 'JavaScript (ES6+)', 'CSS'], 
      img:'/img-TimeTracker.png', 
      link:'https://time-tracker-roan-seven.vercel.app',
      desc: 'Le projet TimeTracker est une application qui permet de gérer plusieurs activités indépendantes, chacune avec son propre chronomètre, afin de suivre efficacement le temps passé sur différentes tâches.',
    },
    {
      title:'To do list', 
      techs:['React', 'Redux', 'JavaScript (ES6+)', 'CSS'], 
      img:'/img-todolist.png', 
      desc: 'L\'application To Do List permet de gérer efficacement les tâches quotidiennes grâce à React et Redux. Elle offre des fonctionnalités avancées pour ajouter, organiser, et suivre vos activités avec flexibilité.'
    },
    {
      title:'Memory game', 
      techs:['React', 'JavaScript (ES6+)', 'CSS', 'Node.js et Yarn'], 
      img:'/memorygame.png', 
      img2:'/memorygame2.png', 
      link: 'https://memorygame-two-sigma.vercel.app', 
      desc: 'Le projet MemoryGame est un jeu de mémoire interactif qui utilise les concepts fondamentaux de React, tels que le cycle de vie des composants, la gestion des états, et l’inverse data flow.',
    },
  ]
  const projetsMobileData = [
    {
      title: 'Locapic',
      techs: ['React Native', 'Expo', 'JavaScript (ES6+)', 'Redux', 'Fetch API', 'Node.js et Yarn', 'Express.js', 'Mongoose', 'MongoDB'],
      imgs: ['/IMG_9050.PNG', '/IMG_9053.PNG', '/IMG_9054.PNG', '/IMG_9055.PNG', '/IMG_9056.PNG',],
      desc:'Locapic est une app mobile qui géolocalise l\'utilisateur, trace ses déplacements sur une carte interactive, et permet d\'ajouter des points d\'intérêt pour les retrouver facilement.',
    },
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

  const projets = projetsWebData.map((data,i)=>{
    return (
        <div className={styles.card} key={i}>
          <Image src={data.img} alt={data.title} width={310} height={200} className={styles.img}/>
          <p className={styles.text}>{data.title}</p>
          <div className={styles.boxText}>
            <p className={styles.textI}>{data.desc}</p>
          </div>
          <button className={styles.button} onClick={() => showModal(data)}>Voir plus</button>
        </div>
    )
  })

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Pages web</h1>
      <div className={styles.projets}>
         {projets} 
      </div>
      {currentProject && (
        <Modal
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <a href={currentProject?.link} target="_blank" rel="noopener noreferrer" loading={loading}>
              <button className={styles.button} onClick={handleOk}>Aller sur la page</button>
            </a>,
          ]}
          bodyStyle={{ maxHeight: '70vh', overflowY: 'auto', padding: '10px'}}
        >
          <h1 className={styles.textModal}>{currentProject?.title}</h1>
          <p className={styles.textInnerModal}>{currentProject?.desc}</p>
          {currentProject?.techs?.length > 0 && (
            <>
              <h3 className={styles.textModal}>Technologies utilisées</h3>
              <ul className={styles.list}>
                {currentProject?.techs?.map((tech, i) => (
                  <li key={i} className={styles.subText}>{tech}</li>
                ))}
              </ul>
            </>
          )}
          <div className={styles.images}>
            <Image src={currentProject?.img} alt={currentProject?.title} width={310} height={200} className={styles.imgModal}/>
            {currentProject?.img2 && (
              <Image src={currentProject?.img2} alt={currentProject?.title} width={310} height={200} className={styles.imgModal}/>
            )}
          </div>
        </Modal>
      )}
    </div>
  )
}

export default Projets