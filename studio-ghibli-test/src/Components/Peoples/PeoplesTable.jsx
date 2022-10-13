import React, {useContext, useEffect} from 'react'
import { fetchPeople } from '../../Services/FetchApi'
import { GeneralContext } from '../../Provider/GeneralProvider'
import FilterPeoples from './FilterPeoples'


function PeopleTable() {
const {setPeople, peopleCopia, setPeopleCopia} = useContext(GeneralContext)

useEffect(() => {
    fetchPeople().then((data) => { setPeople(data) })
    fetchPeople().then((data) => { setPeopleCopia(data) })

}, [])

  return (
    <>
    <FilterPeoples />    
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Eye Color</th>
        <th>Hair Color</th>        
      </tr>
    </thead>
    <tbody>
      {peopleCopia.map((data) => (
        <tr key={ data.name }>
          <td>{data.name}</td>
          <td>{data.gender}</td>
          <td>{data.age}</td>
          <td>{data.eye_color}</td>
          <td>{data.hair_color}</td>
        
        </tr>
      ))}
    </tbody>
  </table>
  </>
  )
}

export default PeopleTable