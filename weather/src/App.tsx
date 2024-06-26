import React, { useState } from 'react';
import './App.css';
import MainBody from './components/MainBody';
import SearchBar from './components/SearchBar';

function App() {
  const [city, setCity] = useState<string>(' ')
  return (
    <>
      <SearchBar selectedCity={setCity}/>
      <MainBody />
    </>
  );
}

export default App;
