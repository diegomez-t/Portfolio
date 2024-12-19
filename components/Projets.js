import styles from '../styles/Projets.module.css'
import React, { useEffect, useState } from 'react';
import Immage from 'next/image'

function Projets() {

  const projetsData = [
    {title: 'Morning News', img: '/img-morningnews.png',},
    {title:'Star wars', img:'/img-starwars.png',},
    {title:'Time Tracker', img:'/img-TimeTracker.png',},
    {title:'To do list', img:'/img-todolist.png',},
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % projetsData.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);
  

  const projets = projetsData.map((data,i)=>{
    return (
        <div className={styles.card} key={i}>
          <Immage  src={data.img} alt={data.title} width={300} height={200}/>
          <h4 className={styles.text}>{data.title}</h4>
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