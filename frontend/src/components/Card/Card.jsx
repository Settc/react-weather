import "./style.scss"
import { useState } from "react"

function Card(props) {

    const location = props.forecast.location
    const current = props.forecast.current
    
    if (!location && !current) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    
    return (
        <div className="card">
           <h1 id="cardCity">{location.name}</h1>
           <h2 id="cardRegion">{location.region}</h2>
           <img id="icon" src={current.condition.icon}></img>
           <h2 id="temp">{current.temp_f}</h2>
        </div>
        
    )
}

export default Card