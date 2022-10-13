import React, {useContext} from 'react'
import { GeneralContext } from '../../Provider/GeneralProvider'

function FilterMovies() {
const {movies, filters, setFilters, setMoviesCopia } = useContext(GeneralContext)

const filterMoviesByName = (e) => {
  const lowerCaseName = e.toLowerCase()
  const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(lowerCaseName))
  setMoviesCopia(filteredMovies)
  
}

const handleChange = (event) => {
  filterMoviesByName(event.target.value);
  setFilters({ filterMovies: event.target.value });  
};

  return (
    <section>
    <input
      type="text"
      placeholder="Pesquisar"
      data-testid="name-filter"
      value={ filters.FilterMovies }
      onChange={ handleChange }
    /> 
  </section>
  )
}

export default FilterMovies