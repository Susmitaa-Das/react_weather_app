import React, { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
import Forecast from './Components/Forecast'

//"http://api.openweathermap.org/geo/1.0/direct?q=Kolkata&limit=5&appid=6a88ec3937b5a413c685aea098f58e29"

//"http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=6a88ec3937b5a413c685aea098f58e29"

const API_URL = 'https://api.openweathermap.org/data/2.5/forecast?'

const WeatherApp = () => {
  const [forecastData, setForecastData] = useState(null)
  const [searchValue, setSearchValue] = useState('')
 
  const searchCity = async (city) => {
    const response = await fetch(
      `${API_URL}q=${city}&appid=6a88ec3937b5a413c685aea098f58e29`
    )
    const data = await response.json()
    console.log(data)
    setForecastData(data)
  }

  useEffect(() => {
    // Search the default city on initial load
    searchCity('Kolkata')
  }, [])

  const handleSearch = () => {
    searchCity(searchValue)
  }

  return (
    <div className="app">
      <h1>Check How's the Weather</h1>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
      />

      <div>
        <Forecast forecastData={forecastData} />
      </div>
    </div>
  )
}

export default WeatherApp
