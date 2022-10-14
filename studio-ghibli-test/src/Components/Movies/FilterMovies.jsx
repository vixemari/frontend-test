import React, {useContext} from 'react'
import { GeneralContext } from '../../Provider/GeneralProvider'
import {Input} from 'reactstrap'

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
    
    <Input
      type="text"
      placeholder="Pesquisar"
      value={ filters.FilterMovies }
      onChange={ handleChange }
      className="input-search"
    /> 
      
  
  )
}

export default FilterMovies