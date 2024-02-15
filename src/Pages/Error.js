import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
    <h2>Sorry</h2>
    <p>cannot found page</p>
    <Link to="/">Back to Homepage...</Link>
      
    </div>
  )
}

export default Error
