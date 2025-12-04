import React, { useState } from 'react'
import './InteractiveCard.css'

export default function InteractiveCard({ icon, title, description, features }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`card ${isFlipped ? 'flipped' : ''} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="card-icon">{icon}</div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-back">
          <h4>Features:</h4>
          <ul>
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
