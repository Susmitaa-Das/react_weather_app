//  import React from 'react'
//  import CloudIcon from './cloud.svg'
//  import ForecastCard from './ForecastCard'

//  const Forecast = ({ forecastData }) => {
//    if (!forecastData) {
//      return <div>Loading...</div>
//    }

//     //Extract forecast details from forecastData
//     const { list, city } = forecastData
//     const { temp, humidity, feels_like: feels } = list[0].main

//    //  Calculate temperature in Celsius
//     const temperatureCelsius = Math.round(temp - 273.15)
//    //  Calculate feels like temperature in Celsius
//     const feelsCelsius = Math.round(feels - 273.15)


//    const dataList = [
//      { dt: list[0].dt },
//      // ... other items in the list
//    ]

//    return (
//       <div>
//         <div className="box">
//           <p className="city">{city.name}</p>
//           <p className="temp">
//             <img src={CloudIcon} alt="cloud" className="cloud-icon" />
//             {temperatureCelsius.toFixed(0)}°C
//           </p>
//           <p className="feel">Feels like {feelsCelsius.toFixed(0)}°C.</p>
//           <p className="humi">Humidity: {humidity}%</p>
//         </div>
//         <ForecastCard list={dataList} temperature={temperatureCelsius} humidity={humidity} /> 
//          <ForecastCard list={dataList} temperature={temperatureCelsius} humidity={humidity} /> 
//       </div>
  
//     )

//  }

//  export default Forecast





 import React from 'react';
 import CloudIcon from './cloud.svg';
 import ForecastCard from './ForecastCard';
 

 const Forecast = ({ forecastData }) => {
   if (!forecastData) {
     return <div>Loading...</div>;
   }

   // Extract forecast details from forecastData
   const { list, city } = forecastData;
   const { humidity, feels_like: feels } = list[0].main;

   const dataList = list.map((item) => {
     const { dt, main } = item;
     const { temp } = main;

     // Calculate temperature in Celsius
     const temperatureCelsius = Math.round(temp - 273.15);

     return {
       dt,
       temperatureCelsius,
     };
   });

   return (
     <div>
       <div className="box">
         <p className="city">{city.name}</p>
         <p className="temp">
           <img src={CloudIcon} alt="cloud" className="cloud-icon" />
           {dataList[0].temperatureCelsius.toFixed(0)}°C
         </p>
         <p className="feel">Feels like {Math.round(feels - 273.15)}°C.</p>
         <p className="humi">Humidity: {humidity}%</p>
       </div>
       <ForecastCard list={dataList} humidity={humidity} />
     
     </div>
   );
 };

 export default Forecast;

