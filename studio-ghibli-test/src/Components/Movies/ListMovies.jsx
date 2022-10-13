import React, { useContext, useEffect } from 'react'
import { GeneralContext } from '../../Provider/GeneralProvider'
import {fetchMovies} from '../../Services/FetchApi'

function ListMovies() {
  const {movies, setMovies} = useContext(GeneralContext)

  useEffect(() => {
    fetchMovies().then((data) => setMovies(data))
  }, [setMovies])

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <p>{movie.year}</p>
        </div>
      ))}
    </div>
  )
}

export default ListMovies