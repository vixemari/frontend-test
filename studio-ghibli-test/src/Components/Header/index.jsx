import React from 'react'
import propTypes from 'prop-types'
import './style.css'
import logo from '../../logo.svg';

function Header({setPage}) {
  const handlePage = (e) => {
    setPage(e.target.value)
  }
  return (
    <header>
      <img src={logo}/>
      <select onChange={ handlePage } >
      <option value="initial">Select a option</option>
      <option value="people">People</option>
      <option value="Location">Location</option>
      <option value="films">Films</option>
    </select>
    </header>
  )
}

Header.propTypes = {
  page: propTypes.string.isRequired,
  setPage: propTypes.func.isRequired
}

export default Header