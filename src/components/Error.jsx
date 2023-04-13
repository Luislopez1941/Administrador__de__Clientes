import React from 'react'
import error from './Error.css'

const Error = ({mensaje}) => {
  return (
    <div className='advertencias'>
      <p>{mensaje}</p>
    </div>
  )
}

export default Error
