import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import TemperatureDetails from './components/TemperatureDetails';


function App() {
  const [city, setCity] = useState<string>('');
  return (
    <>
      <SearchBar selectedCity={setCity} />
      <TemperatureDetails city={city}  />
    </>
  );
}

export default App;
