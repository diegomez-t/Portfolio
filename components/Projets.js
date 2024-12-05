import styles from '../styles/Projets.module.css'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

function Projets() {

  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false) 
  const [startX, setStartX] = useState(0) 
  const [scrollLeft, setScrollLeft] = useState(0) 

  const projetsData = [
    {title: 'Morning News', img: '/img-morningnews.png',},
    {title:'Star wars', img:'/img-starwars.png',},
    {title:'Time Tracker', img:'/img-TimeTracker.png',},
    {title:'To do list', img:'/img-todolist.png',},
    {title: 'Morning News', img: '/img-morningnews.png',},
    {title:'Star wars', img:'/img-starwars.png',},
    {title:'Time Tracker', img:'/img-TimeTracker.png',},
    {title:'To do list', img:'/img-todolist.png',},
  ]

  const handleMouseDown = (e) => {
     setIsDragging(true) 
     setStartX(e.pageX - containerRef.current.offsetLeft) 
     setScrollLeft(containerRef.current.scrollLeft) 
  }

  const handleMouseMove = (e) => {
    if (!isDragging) 
      return 
    e.preventDefault() 
    const x = e.pageX - containerRef.current.offsetLeft 
    const walk = (x - startX) * 2 // La vitesse de défilement 
    containerRef.current.scrollLeft = scrollLeft - walk 
  }
  const handleMouseUp = () => { 
    setIsDragging(false) 
  }

  const handleScroll = (e) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += e.deltaY;
    } 
  };
  
  

  const projets = projetsData.map((data,i)=>{
    return (
        <div className={styles.card} key={i}>
            <Image src={data.img} alt={data.title} width={285} height={195} className={styles.img}/>
            <h4 className={styles.text}>{data.title}</h4>
        </div>
    )
  })

  return (
    <div className={styles.main}>
      <div  className={styles.projets} 
            ref={containerRef} 
            onMouseDown={handleMouseDown} 
            onMouseMove={handleMouseMove} 
            onMouseUp={handleMouseUp} 
            onMouseLeave={handleMouseUp}
            onWheel={handleScroll}
            >
         {projets} 
      </div>
    </div>
  )
}

export default Projets