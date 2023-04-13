import React from 'react'


const ErrorLogin = ({mensaje}) => {
  return (
    <div className='advertencias'>
      <p>{mensaje}</p>
    </div>
  )
}

export default ErrorLogin