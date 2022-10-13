import React from 'react'
import propTypes from 'prop-types'

function CardMovies({ image, title, description, year }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{year}</p>
    </div>
  )
}

CardMovies.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
}

export default CardMovies