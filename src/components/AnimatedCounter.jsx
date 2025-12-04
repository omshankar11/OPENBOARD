import React, { useState, useEffect } from 'react'
import './AnimatedCounter.css'

export default function AnimatedCounter({ label, finalValue, duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startValue = 0
    const increment = finalValue / (duration / 50)
    
    const counter = setInterval(() => {
      startValue += increment
      if (startValue >= finalValue) {
        setCount(finalValue)
        clearInterval(counter)
      } else {
        setCount(Math.floor(startValue))
      }
    }, 50)

    return () => clearInterval(counter)
  }, [finalValue, duration])

  return (
    <div className="counter">
      <div className="counter-value">{count}+</div>
      <div className="counter-label">{label}</div>
    </div>
  )
}
