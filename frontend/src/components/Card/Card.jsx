import "./style.scss"
import { useState } from "react"

function Card(props) {    
    
    return (
        <div className="card">
           <h1 id="dayOfTheWeek">{props.dayOfTheWeek}</h1>
           <div id="dateContainer">
            <h4 id="month">{props.month}</h4>
            <h4 id="date">{props.date}</h4>
           </div>
           <img id="icon" src={props.icon}></img>
           <h2 id="condition">{props.condition}</h2>
           <hr />
           <h2 id="maxtemp">{Math.floor(props.maxtemp)}°</h2>           
           <h2 id="mintemp">{Math.floor(props.mintemp)}°</h2>
        </div>
        
    )
}

export default Card