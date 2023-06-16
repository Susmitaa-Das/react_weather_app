import React from 'react'

const ForecastCard = ({ list }) => {
  return (
    <div className="forecast">
      {list.map((item) => {
        const date = new Date(item.dt_txt)
        const weekday = date.toLocaleDateString('en-US', { weekday: 'long' })

        return (
          <div key={item.dt_txt}>
            <p>5 Days forecast</p>
            <p>{weekday}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ForecastCard
