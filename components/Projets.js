import styles from '../styles/Projets.module.css';
import Projet from './Projet';

function Projets() {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const projets = projetsData.map((data,i)=>{
    return <Projet key={i} urlToImage={data.img} title={data.title}/>
  })

  return (
    <div className={styles.main}>
      <div className={styles.projets}>
         {projets} 
      </div>
    </div>
  );
}

export default Projets;