import Card from "./components/Card/Card"
import './App.css'
import Axios from "axios"
import { useEffect, useState } from "react"
const key = import.meta.env.VITE_API_KEY

function App() {

    const [loading, setLoading] = useState(true)
    const [weather, setWeather] = useState([])

    useEffect(() => {
        Axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=Flagstaff`)
             .then((response) => {
                setWeather(response.data)
                console.log(response.data)
                setLoading(false)
             }).catch(error => {
                console.log(error)
             })
    }, [])
  

  return (
    <div className="App">
     <Card />
    </div>
  )
}

export default App
