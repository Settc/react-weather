// import components
import Card from "./components/Card/Card"
import Search from "./components/Search/Search"

// import css
import './App.scss'

// import libraries
import Axios from "axios"
import { useEffect, useState } from "react"

//define variables
const key = import.meta.env.VITE_API_KEY


function App() {
  
  const [weather, setWeather] = useState([])
  const [city, setCity] = useState("Columbus")
  
  //seperate queries for the weather right now and for a 5 day forecase
  const currentQuery = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
  const forecastQuery = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=5` 
  
  //on first load, send query to weather api, set weather state to the response
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
    let date = fullDate.getDate()

    const parseDate = () => {      
      switch (dayName) {
        case 6:
          return "Sunday"
          break
        case 0:
          return "Monday"
          break
        case 1:
          return "Tuesday"
          break
        case 2:
          return "Wednesday"
          break
        case 3:
          return "Thursday"
          break
        case 4:
          return "Friday"
          break
        case 5:
          return "Saturday"
          break
      }      
    }
    
    // this function takes the month number, parsed from the unix timestamp provided by the api
    // converts it into the actual name of the month
    function getMonthName(monthNumber) {
      let monthName = new Date()
      monthName.setMonth(monthNumber)
      return monthName.toLocaleString([], { month: "long" })
    }   

    return <Card key={index}
                 dayOfTheWeek={parseDate()}
                 month={getMonthName(fullDate.getMonth())}
                 date={date + 1}
                 icon={weather[index].day.condition.icon} 
                 condition={weather[index].day.condition.text} 
                 maxtemp={(weather[index].day.maxtemp_f)}
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
