import React from 'react'
import ListMovies from '../Components/Movies/ListMovies'
import PeoplesTable from '../Components/Peoples/PeoplesTable'
import LocationsTable from '../Components/Locations/LocationsTable'

function Home() {

  const handleSelect = (e) => {
    const { value } = e.target
    if (value === 'movies') {
      return <ListMovies />
    } else if (value === 'people') {
      return <PeoplesTable />
    } else if (value === 'locations') {
      return <LocationsTable />
    }
  }
  
  return (
    <select onChange={handleSelect}>
      <option value="initial">Select a option</option>
      <option value="people">People</option>
      <option value="Location">Location</option>
      <option value="films">Films</option>
    </select>
  )
}

export default Home