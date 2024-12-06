import styles from '../styles/Projets.module.css'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

function Projets() {

  const projetsData = [
    {title: 'Morning News', img: '/img-morningnews.png',},
    {title:'Star wars', img:'/img-starwars.png',},
    {title:'Time Tracker', img:'/img-TimeTracker.png',},
    {title:'To do list', img:'/img-todolist.png',},
  ]
  

  const projets = projetsData.map((data,i)=>{
    return (
        <SwiperSlide className={styles.card} key={i} style={{ backgroundImage: `url(${data.img})`, display:'flex', flexDirection: 'column', justifyContent:'flex-end', alignItems: 'flex-start'}}>
          <h4 className={styles.text}>{data.title}</h4>
        </SwiperSlide>
    )
  })

  return (
    <div className={styles.main}>
      <Swiper  
        className={styles.projets}
        modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        slidesPerView={3}
        navigation
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50, 
          stretch: 0, 
          depth: 100, 
          modifier: 1,
        }}
        style={{display:'flex', justifyContent:'center', alignItems: 'center'}}
      >
         {projets} 
      </Swiper>
    </div>
  )
}

export default Projets