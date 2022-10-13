import React, {useContext} from 'react'
import { GeneralContext } from '../../Provider/GeneralProvider'


function FilterPeoples() {
  const {people, filters, setFilters, setPeopleCopia } = useContext(GeneralContext)

  const filterByName = (e) => {
    const lowerCaseName = e.toLowerCase()
    const filteredPeoples = people.filter((people) => people.name.toLowerCase().includes(lowerCaseName))
    setPeopleCopia(filteredPeoples)  
  }

  const handleChange = (event) => {
    filterByName(event.target.value);
    setFilters({ filterPeoples: event.target.value });
  };


  return (
    <section>
      <input
      type="text"
      placeholder="Pesquisar"
      value={ filters.filterPeoples }
      onChange={ handleChange }
    />   
        
  </section>
  )
}

export default FilterPeoples