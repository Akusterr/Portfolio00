import React from 'react'
import "./AnimatedBackground.css"
function AnimatedBackground( {children}) {
  return (
    <div className='animated-container'>{children}</div>
  )
}

export default AnimatedBackground