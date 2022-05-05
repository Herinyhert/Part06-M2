import React from 'react';
import estilo from '../estilo/card.module.css'

export default function Card(props) {
  // acá va tu código
  return (
  <div className={estilo.base}>
     <div className={estilo.base1}>
        <button onClick={props.onClose}>x</button>
        <h3>{props.name}</h3>
     </div>
     <div className={estilo.base2}>
        <div className={estilo.base3}>
            <h5 className={estilo.uno}>Max</h5>
            <p className={estilo.dos}>{props.max}</p>
            <h5 className={estilo.tres}>Min</h5>
            <p className={estilo.cuatro}>{props.min}</p>
            <img className={estilo.cinco} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={"img"}/>
        </div>
     </div>
  </div>
  )
};