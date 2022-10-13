import React, {useContext, useEffect} from 'react'
import { fetchLocations } from '../../Services/FetchApi'
import { GeneralContext } from '../../Provider/GeneralProvider'


function LocationTable() {
const {locations, setLocations} = useContext(GeneralContext)

useEffect(() => {
    fetchLocations().then((data) => {
        setLocations(data)
    })
}, [])

  return (
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Climate</th>
        <th>Terrain</th>
        <th>Surface Water</th>                
      </tr>
    </thead>
    <tbody>
      {locations.map((data) => (
        <tr key={ data.name }>
          <td>{data.name}</td>
          <td>{data.climate}</td>
          <td>{data.terain}</td>
          <td>{data.surface_water}</td>        
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default LocationTable