import React from 'react';
import { GeneralProvider } from './Provider/GeneralProvider';
import Home from './Pages/Home';

function App() {
  return (
    <GeneralProvider>
     <Home />
    </GeneralProvider>
  );
}

export default App;
