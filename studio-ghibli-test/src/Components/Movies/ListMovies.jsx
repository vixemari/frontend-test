import React, { useContext, useEffect } from 'react'
import { GeneralContext } from '../../Provider/GeneralProvider'
import {fetchMovies} from '../../Services/FetchApi'
import CardMovies from './CardMovies'
import FilterMovies from './FilterMovies'

function ListMovies() {
  const {moviesCopia, setMovies, setMoviesCopia} = useContext(GeneralContext)

  useEffect(() => {
    fetchMovies().then((data) => setMoviesCopia(data))
    fetchMovies().then((data) => setMovies(data))
  }, [])

  return (
    <div> 
      <FilterMovies />    
      {moviesCopia.map((movie) => (
        <CardMovies
          key={movie.id}
          image={movie.image}
          title={movie.title}
          description={movie.description}
          year={movie.release_date}
          />
          
          ))}        
    </div>
  )
}

export default ListMovies