//   import { useEffect } from 'react';
//   import './App.css';
//   import SearchIcon from './search.svg'

//   const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';

//   const city1 = {
//     "temp": 307.12,
//     "feels_like": 314.12,
//     "temp_min": 307.12,
//     "temp_max": 307.12,
//     "pressure": 1001,
//     "humidity": 62
// }

//   const App = () => {

//     const searchCity = async (city) => {
//       const response = await fetch(`${API_URL}q=${city}&appid=6a88ec3937b5a413c685aea098f58e29`);
//       const data = await response.json();
//       console.log(data);
//     };

//     useEffect(() => {
//       searchCity('Kolkata');

//     }, []);

//     return (
//       <div className='app'>
//         <h1>Weather</h1>
//         <div className='search'>
//           <input
//           placeholder='Search City'
//           value={'kolkata'}
//           onChange={()=>{}}
//           />
//           <img
//           src={SearchIcon}
//           alt='search'
//           onClick={()=>{}}
//           />
//         </div>
//         <div>
//           <div>
//             <div>

//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   export default App;


import React, { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?'

const WeatherApp = () => {
  const [temperature, setTemperature] = useState(null)
  const [searchValue, setSearchValue] = useState('')

  const searchCity = async (city) => {
    const response = await fetch(
      `${API_URL}q=${city}&appid=6a88ec3937b5a413c685aea098f58e29`
    )
    const data = await response.json()
      
    const temp = data.main.temp
    const temperatureCelsius = Math.round(temp - 273.15)
    setTemperature(temperatureCelsius)
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
      <div className="search">
        <input
          placeholder="Search City"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={handleSearch}
        />
      </div>

      <div>
        <div>
          <div>
            <p>The current temperature is: {temperature.toFixed(2)}°C</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp

