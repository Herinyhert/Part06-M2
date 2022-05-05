import React from "react";
import stilo from "../stilo/stilo.module.css"
// export default function Card(props) {
//   // acá va tu código
//   return <div>
//           <button onClick={props.onClose}>x</button>
//           <h3>{props.name}</h3>
//           <h5>Max {props.max} </h5>
//           <h5>Min {props.min} </h5>
//           <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={"img"}/>
//   </div>
// };

class Card extends React.Component {
  render(){
    return(
       <div className={stilo.container}>
         <div className={stilo.box}>
            <button onClick={this.props.onClose}>x</button>
            <h3>{this.props.name}</h3>
            <div className={stilo.conten}>
                <h5>Max {this.props.max} </h5>
                <h5>Min {this.props.min} </h5>
                <img src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} alt={"img"}/>
            </div>
         </div>
      </div>
    )
  }
};
export default Card;