/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import ListMovies from '../Components/Movies/ListMovies'
import PeoplesTable from '../Components/Peoples/PeoplesTable'
import LocationsTable from '../Components/Locations/LocationsTable'
import Header from '../Components/Header'

function Home() {  
  const [page, setPage] = useState('movies') 

  const handlePage = (e) => {
    setPage(e.target.value)
  }
  return (
    <>
    <Header />
    <select onChange={ handlePage } >
      <option value="initial">Select a option</option>
      <option value="people">People</option>
      <option value="Location">Location</option>
      <option value="films">Films</option>
    </select>
    {page === 'people' && <PeoplesTable />} 
    {page === 'Location' && <LocationsTable />}
    {page === 'films' && <ListMovies />}

    </>
  )
}

export default Home