import React from 'react'
import "./style.css"
import SearchIcon from "@material-ui/icons/Search"

function Search( {placeholder, cityName, changeCity} ) {
  return (
    <div>
        <h1 className="cityName">{cityName}</h1>        
        <div className="searchInputs">
            <input type="text" 
                   id="search" 
                   placeholder={placeholder}
                   onKeyDown={e => {
                    if(e.key === "Enter") {
                    changeCity(e.target.value)}
                   }
                }
            />
            <div className='searchIcon'>
                <SearchIcon />
            </div>
        </div>
    </div>
  )
}

export default Search