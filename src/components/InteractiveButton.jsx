import React, { useState } from 'react'
import './InteractiveButton.css'

export default function InteractiveButton({ children, onClick, variant = 'primary' }) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    if (onClick) onClick()
    setTimeout(() => setIsClicked(false), 600)
  }

  return (
    <button 
      className={`interactive-btn ${variant} ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      <span className="btn-text">{children}</span>
      <span className="btn-ripple"></span>
    </button>
  )
}
