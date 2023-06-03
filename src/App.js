

  import { useEffect } from 'react';
  import './App.css';
  
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
  
  const App = () => {
    const searchCity = async (city) => {
      const response = await fetch(`${API_URL}q=${city}&appid=6a88ec3937b5a413c685aea098f58e29`);
      const data = await response.json();
      console.log(data);
    };
  
    useEffect(() => {
      searchCity('Kolkata');
    }, []);
  
    return (
      <div>
        <h1>Weather</h1>
      </div>
    );
  };
  
  export default App;
  