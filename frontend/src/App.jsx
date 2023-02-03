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
    
    let milliseconds = weather[index].date_epoch
    let fullDate = new Date(milliseconds * 1000)
    let dayName = fullDate.getDay()
    let monthName = fullDate.getMonth()
    let date = fullDate.getDate()

    const parseDate = () => {
      
      switch (dayName) {
        case 0:
          return "Sunday"
          break
        case 1:
          return "Monday"
          break
        case 2:
          return "Tuesday"
          break
        case 3:
          return "Wednesday"
          break
        case 4:
          return "Thursday"
          break
        case 5:
          return "Friday"
          break
        case 6:
          return "Saturday"
          break
      }

    }
    

    console.log(dayName)

    return <Card key={index}
                 dayOfTheWeek={parseDate()}         
                 icon={weather[index].day.condition.icon} 
                 condition={weather[index].day.condition.text} 
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
