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
           <p>{location.region}</p>
           <p>{current.temp_f}</p>
        </div>
        
    )
}

export default Card