import React from 'react'
import propTypes from 'prop-types'

function CardMovies({ image, title, description, year }) {
  return (    
    <div className='movie-card'>
      <div className='movie-card-body'>
      <img className='movie-cover' src={image} alt={title} />      
      <h4 className='movie-card-title'>{title}</h4>
      <p className='movie-card-text'>{description}</p>
      <p className='movie-card-text'>{year}</p>   
      </div>   
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