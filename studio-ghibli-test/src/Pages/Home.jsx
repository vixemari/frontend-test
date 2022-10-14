/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import ListMovies from '../Components/Movies/ListMovies'
import PeoplesTable from '../Components/Peoples/PeoplesTable'
import LocationsTable from '../Components/Locations/LocationsTable'
import Header from '../Components/Header'

function Home() {  
  const [page, setPage] = useState('movies') 

  
  return (
    <>
    <Header page={page} setPage={setPage}/>
   
    { page === 'people' && <PeoplesTable />} 
    {page === 'Location' && <LocationsTable />}
    {page === 'films' && <ListMovies />}

    </>
  )
}

export default Home