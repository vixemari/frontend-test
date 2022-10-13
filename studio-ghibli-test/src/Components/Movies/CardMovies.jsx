import React from 'react'
import propTypes from 'prop-types'

function CardMovies({ image, title, description, year }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{year}</p>
    </div>
  )
}
CardMovies.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  year: propTypes.string.isRequired  
}

export default CardMovies