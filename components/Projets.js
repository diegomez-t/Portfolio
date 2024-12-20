import styles from '../styles/Projets.module.css'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function Projets() {

  const projetsData = [
    {title: 'Morning News', img: '/img-morningnews.png', link: 'https://morning-news-alpha.vercel.app', desc: 'MorningNews est une application qui permet de consulter les dernières actualités de Tech Crunch. Les utilisateurs peuvent visualiser les articles récents et sauvegarder leurs préférés. En se connectant à leur compte, ils peuvent facilement retrouver et accéder à leurs articles sauvegardés.'},
    {title:'Star wars', img:'/img-starwars.png', desc: 'Cette application Star Wars permet aux utilisateurs de plonger dans l’univers de la saga tout en explorant de nouvelles façons de gérer le style dans React. En particulier, cette application met en œuvre une fonctionnalité de gestion dynamique du thème, avec un mode sombre pour offrir une expérience immersive et adaptée à tous les fans de Star Wars.'},
    {title:'Time Tracker', img:'/img-TimeTracker.png',},
    {title:'To do list', img:'/img-todolist.png',},
    {title:'Memory game', img:'/memorygame.png', link: 'https://memorygame-two-sigma.vercel.app'},
  ]

  const projets = projetsData.map((data,i)=>{
    return (
        <div className={styles.card} key={i}>
          <Image src={data.img} alt={data.title} width={310} height={200} className={styles.img}/>
          <p className={styles.text}>{data.title}</p>
          <p className={styles.textI}>{data.desc}</p>
          <a href={data?.link} target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>Aller à la page</button>
          </a>
        </div>
    )
  })

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Pages web</h2>
      <div className={styles.projets}>
         {projets} 
      </div>
    </div>
  )
}

export default Projets