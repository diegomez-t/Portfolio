import styles from '../styles/Projets.module.css'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function Projets() {

  const projetsData = [
    {title: 'Morning News', img: '/img-morningnews.png',},
    {title:'Star wars', img:'/img-starwars.png',},
    {title:'Time Tracker', img:'/img-TimeTracker.png',},
    {title:'To do list', img:'/img-todolist.png',},
  ]

  const projets = projetsData.map((data,i)=>{
    return (
        <div className={styles.card} key={i}>
            <Image src={data.img} alt={data.title} width={310} height={234} className={styles.img}/>
            <p className={styles.text}>{data.title}</p>
          <button className={styles.button}>Aller vers la page</button>
        </div>
    )
  })

  return (
    <div className={styles.main}>
      <div className={styles.projets}>
         {projets} 
      </div>
    </div>
  )
}

export default Projets