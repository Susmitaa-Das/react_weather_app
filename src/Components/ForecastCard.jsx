 import React, { useState } from 'react'
 import Forecast from './Forecast'

 const ForecastCard = ({ list , temperature, humidity }) => {
   const [isExpanded, setIsExpanded] = useState(false)
 

   const toggleExpand = () => {
     setIsExpanded(!isExpanded)
   }
  

//   return (
//     <div className="forecast">
//       {list.map((item) => {
//         const date = new Date(item.dt * 1000)
//         const options = {
//           weekday: 'long',
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric',
//           hour: 'numeric',
//           minute: 'numeric',
//           second: 'numeric',
//           timeZone: 'UTC',
//         }


//         const formattedDate = date.toLocaleDateString('en-US', options)

//         return (
//           <div key={item.dt}>
//             <p>5 Days forecast</p>
//             <p>{formattedDate}</p>
//             <button className="extend" onClick={toggleExpand}>
//               {isExpanded ? '▼' : '▲'}
//             </button>
//             {isExpanded && (
//               <div>
//                <p>Temperature: {temperature}°C</p>
//                 <p>Humidity: {humidity}%</p>
//               </div>
//             )}
//           </div>
//         )
//       })}
//     </div>
//   )


  //...
 return (
   <div className="forecast">
     {list.map((item) => {
       const date = new Date(item.dt * 1000);
       const formattedTime = date.toLocaleString('en-US', {
         weekday:'long',
         hour: 'numeric',
         minute: 'numeric',
         day: 'numeric',
         hour12: true,
       });
       return (
         <div key={item.dt}>
           <p>{formattedTime}</p>
            <button className="extend" onClick={toggleExpand}>
             {isExpanded ? '▼' : '▲'}
           </button> 
          
           {isExpanded && (
             <div>
               <p>Temperature: {item.temperatureCelsius}°C</p>
               <p>Humidity: {humidity}%</p>
             </div>
           )}
           
         </div>
       );
     })}
   </div>
   
 );
// ...

}

export default ForecastCard
