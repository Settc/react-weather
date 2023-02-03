import React from 'react'
import "./style.css"

function Search( {cityName} ) {
  return (
    <div>
        <h1 className="cityName">{cityName}</h1>        
        <input type="search" id="search"></input>
    </div>
  )
}

export default Search