import "./style.scss"
import { useState } from "react"

function Card(props) {

    // const location = props.forecast.location
    // const current = props.forecast.current
    
    if (!location && !current) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    
    return (
        <div className="card">
           <h1 id="cardCity">{props.dayOfTheWeek}</h1>           
           {<img id="icon" src={props.icon}></img>}
           
           {<h2 id="maxtemp">{Math.floor(props.maxtemp)}</h2>}
           
           {<h2 id="mintemp">{Math.floor(props.mintemp)}</h2>}
        </div>
        
    )
}

export default Card