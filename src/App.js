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

  const weather1 =[
    {
        "dt": 1686862800,
        "main": {
            "temp": 304.12,
            "feels_like": 311.12,
            "temp_min": 304.12,
            "temp_max": 304.72,
            "pressure": 999,
            "sea_level": 999,
            "grnd_level": 997,
            "humidity": 89,
            "temp_kf": -0.6
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }
        ],
        "clouds": {
            "all": 40
        },
        "wind": {
            "speed": 6.7,
            "deg": 193,
            "gust": 11.24
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2023-06-15 21:00:00"
    },
    {
        "dt": 1686873600,
        "main": {
            "temp": 304.25,
            "feels_like": 311.25,
            "temp_min": 304.25,
            "temp_max": 304.5,
            "pressure": 999,
            "sea_level": 999,
            "grnd_level": 998,
            "humidity": 84,
            "temp_kf": -0.25
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 60
        },
        "wind": {
            "speed": 5.57,
            "deg": 207,
            "gust": 9.48
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-16 00:00:00"
    },
    {
        "dt": 1686884400,
        "main": {
            "temp": 308.38,
            "feels_like": 315.38,
            "temp_min": 308.38,
            "temp_max": 310.51,
            "pressure": 1000,
            "sea_level": 1000,
            "grnd_level": 1000,
            "humidity": 55,
            "temp_kf": -2.13
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 80
        },
        "wind": {
            "speed": 4.4,
            "deg": 238,
            "gust": 6.1
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-16 03:00:00"
    },
    {
        "dt": 1686895200,
        "main": {
            "temp": 315.88,
            "feels_like": 317.57,
            "temp_min": 315.88,
            "temp_max": 315.88,
            "pressure": 999,
            "sea_level": 999,
            "grnd_level": 998,
            "humidity": 22,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 1.58,
            "deg": 237,
            "gust": 5.16
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-16 06:00:00"
    },
    {
        "dt": 1686906000,
        "main": {
            "temp": 315.91,
            "feels_like": 317.62,
            "temp_min": 315.91,
            "temp_max": 315.91,
            "pressure": 996,
            "sea_level": 996,
            "grnd_level": 995,
            "humidity": 22,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 99
        },
        "wind": {
            "speed": 3.35,
            "deg": 214,
            "gust": 4.87
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-16 09:00:00"
    },
    {
        "dt": 1686916800,
        "main": {
            "temp": 308.69,
            "feels_like": 315.56,
            "temp_min": 308.69,
            "temp_max": 308.69,
            "pressure": 997,
            "sea_level": 997,
            "grnd_level": 996,
            "humidity": 51,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 72
        },
        "wind": {
            "speed": 9.35,
            "deg": 177,
            "gust": 11.27
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-16 12:00:00"
    },
    {
        "dt": 1686927600,
        "main": {
            "temp": 304.67,
            "feels_like": 311.67,
            "temp_min": 304.67,
            "temp_max": 304.67,
            "pressure": 1000,
            "sea_level": 1000,
            "grnd_level": 999,
            "humidity": 72,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }
        ],
        "clouds": {
            "all": 34
        },
        "wind": {
            "speed": 6.77,
            "deg": 186,
            "gust": 11.8
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2023-06-16 15:00:00"
    },
    {
        "dt": 1686938400,
        "main": {
            "temp": 304.1,
            "feels_like": 311.1,
            "temp_min": 304.1,
            "temp_max": 304.1,
            "pressure": 1001,
            "sea_level": 1001,
            "grnd_level": 1000,
            "humidity": 75,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 67
        },
        "wind": {
            "speed": 6.37,
            "deg": 181,
            "gust": 11.78
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2023-06-16 18:00:00"
    },
    {
        "dt": 1686949200,
        "main": {
            "temp": 303.62,
            "feels_like": 310.62,
            "temp_min": 303.62,
            "temp_max": 303.62,
            "pressure": 999,
            "sea_level": 999,
            "grnd_level": 998,
            "humidity": 76,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 6.69,
            "deg": 179,
            "gust": 12.57
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2023-06-16 21:00:00"
    },
    {
        "dt": 1686960000,
        "main": {
            "temp": 303.56,
            "feels_like": 310.56,
            "temp_min": 303.56,
            "temp_max": 303.56,
            "pressure": 1000,
            "sea_level": 1000,
            "grnd_level": 999,
            "humidity": 77,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 6.84,
            "deg": 187,
            "gust": 12.12
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-17 00:00:00"
    },
    {
        "dt": 1686970800,
        "main": {
            "temp": 308.77,
            "feels_like": 315.76,
            "temp_min": 308.77,
            "temp_max": 308.77,
            "pressure": 1002,
            "sea_level": 1002,
            "grnd_level": 1001,
            "humidity": 51,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 8.08,
            "deg": 193,
            "gust": 9.25
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-17 03:00:00"
    },
    {
        "dt": 1686981600,
        "main": {
            "temp": 310.82,
            "feels_like": 317.68,
            "temp_min": 310.82,
            "temp_max": 310.82,
            "pressure": 1001,
            "sea_level": 1001,
            "grnd_level": 1000,
            "humidity": 44,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 96
        },
        "wind": {
            "speed": 7.15,
            "deg": 196,
            "gust": 7.09
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-17 06:00:00"
    },
    {
        "dt": 1686992400,
        "main": {
            "temp": 312.21,
            "feels_like": 319.07,
            "temp_min": 312.21,
            "temp_max": 312.21,
            "pressure": 998,
            "sea_level": 998,
            "grnd_level": 997,
            "humidity": 40,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 78
        },
        "wind": {
            "speed": 8.3,
            "deg": 183,
            "gust": 7.44
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-17 09:00:00"
    },
    {
        "dt": 1687003200,
        "main": {
            "temp": 306.71,
            "feels_like": 313.71,
            "temp_min": 306.71,
            "temp_max": 306.71,
            "pressure": 999,
            "sea_level": 999,
            "grnd_level": 998,
            "humidity": 59,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 87
        },
        "wind": {
            "speed": 8.86,
            "deg": 180,
            "gust": 10.45
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-17 12:00:00"
    },
    {
        "dt": 1687014000,
        "main": {
            "temp": 303.76,
            "feels_like": 310.76,
            "temp_min": 303.76,
            "temp_max": 303.76,
            "pressure": 1001,
            "sea_level": 1001,
            "grnd_level": 1000,
            "humidity": 76,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 8.03,
            "deg": 171,
            "gust": 12.85
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2023-06-17 15:00:00"
    },
    {
        "dt": 1687024800,
        "main": {
            "temp": 303.46,
            "feels_like": 310.46,
            "temp_min": 303.46,
            "temp_max": 303.46,
            "pressure": 1003,
            "sea_level": 1003,
            "grnd_level": 1002,
            "humidity": 78,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 6.16,
            "deg": 184,
            "gust": 10.29
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2023-06-17 18:00:00"
    },
    {
        "dt": 1687035600,
        "main": {
            "temp": 303.07,
            "feels_like": 310.07,
            "temp_min": 303.07,
            "temp_max": 303.07,
            "pressure": 1001,
            "sea_level": 1001,
            "grnd_level": 1000,
            "humidity": 79,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 6.73,
            "deg": 178,
            "gust": 11.78
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2023-06-17 21:00:00"
    },
    {
        "dt": 1687046400,
        "main": {
            "temp": 303.32,
            "feels_like": 309.92,
            "temp_min": 303.32,
            "temp_max": 303.32,
            "pressure": 1002,
            "sea_level": 1002,
            "grnd_level": 1001,
            "humidity": 75,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 5.9,
            "deg": 178,
            "gust": 10.86
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-18 00:00:00"
    },
    {
        "dt": 1687057200,
        "main": {
            "temp": 307.45,
            "feels_like": 313.69,
            "temp_min": 307.45,
            "temp_max": 307.45,
            "pressure": 1004,
            "sea_level": 1004,
            "grnd_level": 1003,
            "humidity": 54,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 99
        },
        "wind": {
            "speed": 7.86,
            "deg": 189,
            "gust": 9.15
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-18 03:00:00"
    },
    {
        "dt": 1687068000,
        "main": {
            "temp": 310.91,
            "feels_like": 317.41,
            "temp_min": 310.91,
            "temp_max": 310.91,
            "pressure": 1002,
            "sea_level": 1002,
            "grnd_level": 1001,
            "humidity": 43,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 82
        },
        "wind": {
            "speed": 7.93,
            "deg": 191,
            "gust": 8
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-18 06:00:00"
    },
    {
        "dt": 1687078800,
        "main": {
            "temp": 311.09,
            "feels_like": 317.85,
            "temp_min": 311.09,
            "temp_max": 311.09,
            "pressure": 999,
            "sea_level": 999,
            "grnd_level": 998,
            "humidity": 43,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "clouds": {
            "all": 19
        },
        "wind": {
            "speed": 8.01,
            "deg": 186,
            "gust": 7.6
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-18 09:00:00"
    },
    {
        "dt": 1687089600,
        "main": {
            "temp": 306.63,
            "feels_like": 313.16,
            "temp_min": 306.63,
            "temp_max": 306.63,
            "pressure": 1000,
            "sea_level": 1000,
            "grnd_level": 999,
            "humidity": 58,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 29
        },
        "wind": {
            "speed": 7.36,
            "deg": 197,
            "gust": 8.69
        },
        "visibility": 10000,
        "pop": 0.28,
        "rain": {
            "3h": 0.23
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-18 12:00:00"
    },
    {
        "dt": 1687100400,
        "main": {
            "temp": 304.13,
            "feels_like": 311.13,
            "temp_min": 304.13,
            "temp_max": 304.13,
            "pressure": 1003,
            "sea_level": 1003,
            "grnd_level": 1002,
            "humidity": 72,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 4,
            "deg": 161,
            "gust": 6.57
        },
        "visibility": 10000,
        "pop": 0.38,
        "rain": {
            "3h": 0.25
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2023-06-18 15:00:00"
    },
    {
        "dt": 1687111200,
        "main": {
            "temp": 303.53,
            "feels_like": 310.51,
            "temp_min": 303.53,
            "temp_max": 303.53,
            "pressure": 1003,
            "sea_level": 1003,
            "grnd_level": 1002,
            "humidity": 75,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 6.95,
            "deg": 159,
            "gust": 9.81
        },
        "visibility": 10000,
        "pop": 0.56,
        "rain": {
            "3h": 0.18
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2023-06-18 18:00:00"
    },
    {
        "dt": 1687122000,
        "main": {
            "temp": 302.95,
            "feels_like": 309.42,
            "temp_min": 302.95,
            "temp_max": 302.95,
            "pressure": 1000,
            "sea_level": 1000,
            "grnd_level": 999,
            "humidity": 77,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 88
        },
        "wind": {
            "speed": 6.81,
            "deg": 175,
            "gust": 12
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2023-06-18 21:00:00"
    },
    {
        "dt": 1687132800,
        "main": {
            "temp": 302.92,
            "feels_like": 309.59,
            "temp_min": 302.92,
            "temp_max": 302.92,
            "pressure": 1001,
            "sea_level": 1001,
            "grnd_level": 1000,
            "humidity": 78,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 94
        },
        "wind": {
            "speed": 5.77,
            "deg": 170,
            "gust": 9.37
        },
        "visibility": 10000,
        "pop": 0.04,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-19 00:00:00"
    },
    {
        "dt": 1687143600,
        "main": {
            "temp": 307.68,
            "feels_like": 314.26,
            "temp_min": 307.68,
            "temp_max": 307.68,
            "pressure": 1002,
            "sea_level": 1002,
            "grnd_level": 1001,
            "humidity": 54,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 73
        },
        "wind": {
            "speed": 8.3,
            "deg": 190,
            "gust": 9.58
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-19 03:00:00"
    },
    {
        "dt": 1687154400,
        "main": {
            "temp": 311.08,
            "feels_like": 317.34,
            "temp_min": 311.08,
            "temp_max": 311.08,
            "pressure": 1001,
            "sea_level": 1001,
            "grnd_level": 1000,
            "humidity": 42,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 52
        },
        "wind": {
            "speed": 9.27,
            "deg": 198,
            "gust": 9.45
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-19 06:00:00"
    },
    {
        "dt": 1687165200,
        "main": {
            "temp": 310.72,
            "feels_like": 316.96,
            "temp_min": 310.72,
            "temp_max": 310.72,
            "pressure": 999,
            "sea_level": 999,
            "grnd_level": 998,
            "humidity": 43,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 51
        },
        "wind": {
            "speed": 7.83,
            "deg": 187,
            "gust": 7.11
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-19 09:00:00"
    },
    {
        "dt": 1687176000,
        "main": {
            "temp": 306.39,
            "feels_like": 312.55,
            "temp_min": 306.39,
            "temp_max": 306.39,
            "pressure": 998,
            "sea_level": 998,
            "grnd_level": 997,
            "humidity": 58,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }
        ],
        "clouds": {
            "all": 62
        },
        "wind": {
            "speed": 7.3,
            "deg": 179,
            "gust": 8.81
        },
        "visibility": 10000,
        "pop": 0.36,
        "rain": {
            "3h": 0.22
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-19 12:00:00"
    },
    {
        "dt": 1687186800,
        "main": {
            "temp": 303.38,
            "feels_like": 309.01,
            "temp_min": 303.38,
            "temp_max": 303.38,
            "pressure": 1002,
            "sea_level": 1002,
            "grnd_level": 1001,
            "humidity": 71,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 2.27,
            "deg": 181,
            "gust": 7.44
        },
        "visibility": 10000,
        "pop": 0.35,
        "rain": {
            "3h": 0.19
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2023-06-19 15:00:00"
    },
    {
        "dt": 1687197600,
        "main": {
            "temp": 303.28,
            "feels_like": 309.54,
            "temp_min": 303.28,
            "temp_max": 303.28,
            "pressure": 1001,
            "sea_level": 1001,
            "grnd_level": 1000,
            "humidity": 74,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 6.37,
            "deg": 180,
            "gust": 10.28
        },
        "visibility": 10000,
        "pop": 0.47,
        "rain": {
            "3h": 1.03
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2023-06-19 18:00:00"
    },
    {
        "dt": 1687208400,
        "main": {
            "temp": 302.66,
            "feels_like": 309.1,
            "temp_min": 302.66,
            "temp_max": 302.66,
            "pressure": 999,
            "sea_level": 999,
            "grnd_level": 998,
            "humidity": 79,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 7.84,
            "deg": 196,
            "gust": 13.03
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2023-06-19 21:00:00"
    },
    {
        "dt": 1687219200,
        "main": {
            "temp": 302.67,
            "feels_like": 308.88,
            "temp_min": 302.67,
            "temp_max": 302.67,
            "pressure": 999,
            "sea_level": 999,
            "grnd_level": 998,
            "humidity": 78,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 90
        },
        "wind": {
            "speed": 7.19,
            "deg": 186,
            "gust": 12.76
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-20 00:00:00"
    },
    {
        "dt": 1687230000,
        "main": {
            "temp": 306.63,
            "feels_like": 313.16,
            "temp_min": 306.63,
            "temp_max": 306.63,
            "pressure": 1001,
            "sea_level": 1001,
            "grnd_level": 1000,
            "humidity": 58,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 88
        },
        "wind": {
            "speed": 7.92,
            "deg": 197,
            "gust": 9.63
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-20 03:00:00"
    },
    {
        "dt": 1687240800,
        "main": {
            "temp": 310.94,
            "feels_like": 317.49,
            "temp_min": 310.94,
            "temp_max": 310.94,
            "pressure": 999,
            "sea_level": 999,
            "grnd_level": 998,
            "humidity": 43,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 92
        },
        "wind": {
            "speed": 8.31,
            "deg": 198,
            "gust": 8.18
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-20 06:00:00"
    },
    {
        "dt": 1687251600,
        "main": {
            "temp": 311.06,
            "feels_like": 317.3,
            "temp_min": 311.06,
            "temp_max": 311.06,
            "pressure": 997,
            "sea_level": 997,
            "grnd_level": 996,
            "humidity": 42,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 76
        },
        "wind": {
            "speed": 7.81,
            "deg": 186,
            "gust": 7.02
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-20 09:00:00"
    },
    {
        "dt": 1687262400,
        "main": {
            "temp": 306.67,
            "feels_like": 312.53,
            "temp_min": 306.67,
            "temp_max": 306.67,
            "pressure": 998,
            "sea_level": 998,
            "grnd_level": 997,
            "humidity": 56,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 64
        },
        "wind": {
            "speed": 8.2,
            "deg": 178,
            "gust": 9.18
        },
        "visibility": 10000,
        "pop": 0.12,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2023-06-20 12:00:00"
    },
    {
        "dt": 1687273200,
        "main": {
            "temp": 303.49,
            "feels_like": 310.11,
            "temp_min": 303.49,
            "temp_max": 303.49,
            "pressure": 1001,
            "sea_level": 1001,
            "grnd_level": 1000,
            "humidity": 74,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 63
        },
        "wind": {
            "speed": 9.21,
            "deg": 194,
            "gust": 13.14
        },
        "visibility": 10000,
        "pop": 0.15,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2023-06-20 15:00:00"
    },
    {
        "dt": 1687284000,
        "main": {
            "temp": 303.17,
            "feels_like": 309.24,
            "temp_min": 303.17,
            "temp_max": 303.17,
            "pressure": 1001,
            "sea_level": 1001,
            "grnd_level": 1000,
            "humidity": 74,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 79
        },
        "wind": {
            "speed": 6.36,
            "deg": 184,
            "gust": 10.55
        },
        "visibility": 10000,
        "pop": 0.13,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2023-06-20 18:00:00"
    }
] 

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
