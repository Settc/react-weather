import Card from "./components/Card/Card"
import Search from "./components/Search/Search"
import './App.scss'
import Axios from "axios"
import { useEffect, useState } from "react"
const key = import.meta.env.VITE_API_KEY


function App() {
  
  const [weather, setWeather] = useState([])
  const [city, setCity] = useState("Columbus")

  const currentQuery = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
  const forecastQuery = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=5`
  
  useEffect(() => {
      Axios.get(forecastQuery)
            .then((response) => {
              setWeather(response.data)
              console.log(response.data)              
            }).catch(error => {
              console.log(error)
            })
  }, [])


  return (
    <div className="App">
      <Search />
      <Card forecast={weather}/>
    </div>
  )
}

export default App
