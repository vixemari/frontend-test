import React, {createContext, useState} from "react";
import PropTypes from "prop-types";

const GeneralContext = createContext();

const GeneralProvider = ({children}) => {
  const [movies, setMovies] = useState([]);
  const [people, setPeople] = useState([]);
  const [locations, setLocations] = useState([]);

  const contextValue = {
    movies,
    setMovies,
    people,
    setPeople,
    locations,
    setLocations,
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
