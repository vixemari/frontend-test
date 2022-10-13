import React, { useContext, useEffect } from 'react'
import { GeneralContext } from '../../Provider/GeneralProvider'
import {fetchMovies} from '../../Services/FetchApi'
import CardMovies from './CardMovies'

function ListMovies() {
  const {movies, setMovies} = useContext(GeneralContext)

  useEffect(() => {
    fetchMovies().then((data) => setMovies(data))
  }, [setMovies])

  return (
    <div>
      {movies.map((movie) => (
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