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
              setWeather(response.data.forecast.forecastday)
              console.log(response.data.forecast.forecastday)              
            }).catch(error => {
              console.log(error)
            })
  }, [])

  

  
  

  const forecast = weather.map((day, index) => {
    return <Card key={index}
                 dayOfTheWeek={weather[index].date}           
                 icon={weather[index].day.condition.icon} 
                 maxtemp={weather[index].day.maxtemp_f} 
                 mintemp={weather[index].day.mintemp_f} 
                 />
                })
  

  if (weather) {
  return (
    <div className="App">
      <Search />
      {forecast}
    </div>
  )}
}

export default App
