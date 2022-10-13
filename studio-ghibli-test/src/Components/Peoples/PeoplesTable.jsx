import React, {useContext, useEffect} from 'react'
import { fetchPeople } from '../../Services/FetchApi'
import { GeneralContext } from '../../Provider/GeneralProvider'


function PeopleTable() {
const {people, setPeople} = useContext(GeneralContext)

useEffect(() => {
    fetchPeople().then((data) => {
        setPeople(data)
    })
}, [])

  return (
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
      {people.map((data) => (
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
  )
}

export default PeopleTable