import React from 'react'
import '../styles/Card.css'

const Card = ({nombre, oceano}) => {
  return (
    <div className='card'>
      <h3>{nombre}!</h3>
      <h4>Ingresaste al Océano {oceano.toUpperCase()}</h4>
    </div>
  )
}

export default Card