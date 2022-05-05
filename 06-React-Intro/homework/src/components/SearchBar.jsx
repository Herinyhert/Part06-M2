import React from 'react';
import stilo from "../stilo/stilo.module.css"

// export default function SearchBar(props) {
//   // acá va tu código
  
//   return (<div>
//   <input type='text' placeholder='Ciudad...'></input>
//   <button onClick={() => props.onSearch('Una Ciudad')}>Agregar</button>
// </div>)
// };

class SearchBar extends React.Component{
  render(){
    return(
      <div>
        <input type="text" placeholder='Ciudad...'/>
        <button className={stilo.agreg} onClick={this.props.onSearch}>Agregar</button>
      </div>
    )
  }
}
export default SearchBar;