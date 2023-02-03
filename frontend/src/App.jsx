// import components
import Card from "./components/Card/Card"
import Search from "./components/Search/Search"

// import css
import './App.scss'

// import libraries
import Axios from "axios"
import { useEffect, useState } from "react"

// define variables
const key = import.meta.env.VITE_API_KEY


function App() {
  
  const [weather, setWeather] = useState([])
  const [city, setCity] = useState("Columbus")
  
  // seperate queries for the weather right now and for a 5 day forecast
  const currentQuery = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
  const forecastQuery = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=5` 
  
  // on first load, send query to weather api, set weather state to the response
  useEffect(() => {
      Axios.get(forecastQuery)
            .then((response) => {
              setWeather(response.data.forecast.forecastday)              
              console.log(response.data.forecast.forecastday)              
            }).catch(error => {
              console.log(error)
            })
  }, [city])  

  // mapping the response data in order to dynamically generate card components

  const forecast = weather.map((day, index) => {
  
    // defining variables in order to parse out unix timestamp object from response data
    let milliseconds = weather[index].date_epoch
    let fullDate = new Date(milliseconds * 1000)
    let dayName = fullDate.getDay()    
    let date = fullDate.getDate()

    // comparing day number parsed out to switch statements
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

    // an array for the following function to check against
    // if the date number falls within one of these ranges
    // the appropriate ordinal is applied to the date on the card
    const st = [1, 21, 31],
          nd = [2, 22],
          rd = [3, 23]
    
    // this function adds ordinals to the end of each date number
    function addOrdinal() {
      if (st.includes(date + 1)) {
        return "st"
      } else if (nd.includes(date + 1)) {
        return "nd"
      } else if (rd.includes(date + 1)) {
        return "rd"
      } else {
        return "th"
      }
    }

    return <Card key={index}
                 dayOfTheWeek={parseDate()}
                 month={getMonthName(fullDate.getMonth())}
                 date={date + 1}
                 ordinal={addOrdinal()}
                 icon={weather[index].day.condition.icon} 
                 condition={weather[index].day.condition.text} 
                 maxtemp={(weather[index].day.maxtemp_f)}
                 mintemp={weather[index].day.mintemp_f} 
                 />
    })

  
    const currentCity = city;

  if (weather) {
  return (
    <div className="App">
      <Search 
        cityName={currentCity}  
        placeholder={"Search for a city..."}
        changeCity={city => setCity(city)}
        />
      {forecast}
    </div>
  )}
}

export default App
