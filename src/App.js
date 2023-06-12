

import React, { useEffect, useState } from 'react'
import './App.css'
import CloudIcon from './cloud.svg'
import SearchBar from './Components/SearchBar'

//"http://api.openweathermap.org/geo/1.0/direct?q=Kolkata&limit=5&appid=6a88ec3937b5a413c685aea098f58e29"

const API_URL = 'https://api.openweathermap.org/data/2.5/forecast?'

const WeatherApp = () => {
  const [forecastData, setForecastData] = useState(null)
  const [temperature, setTemperature] = useState(null)
  const [humidity, setHumidity] = useState(null)
  const [feels, setFeels] = useState(null)
  const [searchValue, setSearchValue] = useState('')

  const searchCity = async (city) => {
    const response = await fetch(
      `${API_URL}q=${city}&appid=6a88ec3937b5a413c685aea098f58e29`
    )
    const data = await response.json()
    console.log(data)
    // Temperature
    const temp = data.list[0].main.temp
    const temperatureCelsius = Math.round(temp - 273.15)
    setTemperature(temperatureCelsius)
    // Humidity
    const humi = data.list[0].main.humidity
    setHumidity(humi)
    // Feels
    const feel = data.list[0].main.feels_like
    const feelsCelsius = Math.round(feel - 273.15)
    setFeels(feelsCelsius)
    // Set forecast data
    setForecastData(data)
  }

  useEffect(() => {
    // Search the default city on initial load
    searchCity('Kolkata')
  }, [])

  const handleSearch = () => {
    searchCity(searchValue)
  }

  if (temperature === null) {
    return <div>Loading...</div>
  }

  return (
    <div className="app">
      <h1>Weather</h1>
     <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
      />

      <div>
        <div>
          <div>
            <p className="temp">
              <img src={CloudIcon} alt="cloud" className="cloud-icon" />
              {temperature.toFixed(0)}°C
            </p>
            <p className="feel">Feels like {feels.toFixed(0)}°C.</p>
            <p className="humi">Humidity: {humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
