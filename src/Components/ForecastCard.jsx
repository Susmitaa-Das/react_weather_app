import React, { useState } from 'react'

const ForecastCard = ({ list }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="forecast">
      {list.map((item) => {
        const date = new Date(item.dt * 1000)
        const options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZone: 'UTC',
        }
        const formattedDate = date.toLocaleDateString('en-US', options)

        return (
          <div key={item.dt}>
            <p>5 Days forecast</p>
            <p>{formattedDate}</p>
          </div>
        )
      })}
      <button className="extend" onClick={toggleExpand}>
        {isExpanded ? '▼' : '▲'}
      </button>
    </div>
  )
}

export default ForecastCard
