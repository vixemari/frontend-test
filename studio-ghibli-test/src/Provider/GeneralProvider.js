import React, {createContext, useState} from "react";
import PropTypes from "prop-types";

const GeneralContext = createContext();

const GeneralProvider = ({children}) => {
  const [movies, setMovies] = useState([]);
  const [people, setPeople] = useState([]);
  const [locations, setLocations] = useState([]);
  const filter = {
    filterMovies: '',
    filterPeoples: '',   
    filterLocations: ''
  };
  const [filters, setFilters] = useState([filter]);
  const [moviesCopia, setMoviesCopia] = useState([]);
  const [peopleCopia, setPeopleCopia] = useState([]);

  const contextValue = {
    movies,
    setMovies,
    people,
    setPeople,
    locations,
    setLocations,
    filters,
    setFilters,
    moviesCopia,
    setMoviesCopia,
    peopleCopia,
    setPeopleCopia
  };

  return (
    <GeneralContext.Provider value={contextValue}>
      {children}
    </GeneralContext.Provider>
  );
}

GeneralProvider.propTypes = {
  children: PropTypes.node.isRequired
}


export {GeneralContext, GeneralProvider};
