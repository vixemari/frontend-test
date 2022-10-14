import React, {useContext} from 'react'
import { GeneralContext } from '../../Provider/GeneralProvider'

function FilterMovies() {
const {locations, filters, setFilters, setLocationsCopia } = useContext(GeneralContext)

const filterMoviesByName = (e) => {
  const lowerCaseName = e.toLowerCase()
  const filteredLocation = locations.filter((movie) => movie.title.toLowerCase().includes(lowerCaseName))
  setLocationsCopia(filteredLocation) 
}

const handleChange = (event) => {
  filterMoviesByName(event.target.value);
  setFilters({ filterLocations: event.target.value });  
};



  return (
    <section>
    <input
      type="text"
      placeholder="Pesquisar"
      value={ filters.Filterlocations }
      onChange={ handleChange }
      className="input-search"
    /> 
    
  </section>
  )
}

export default FilterMovies