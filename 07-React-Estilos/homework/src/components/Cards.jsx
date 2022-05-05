import React from 'react';
import Card from './Card';
import estilo from '../estilo/card.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div  className={estilo.padre}>
    {
      props.cities.map(city =>
        (<Card
        key={city.id}
        name={city.name}
        min= {city.main.temp_min}
        max= {city.main.temp_max}
        img= {city.weather[0].icon}
        onClose={()=> alert(city.name)}
        />))
     }
   </div>
  )
};