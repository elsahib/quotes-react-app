import React from 'react';
import './App.css';
import Heading from './Components/Heading';
import Search from './Components/Search';
import GetQuote from './Components/GetQuote';

function App() {
  return (
    <div className="App container">
      <Heading />
      <GetQuote />
    </div>
  );
}

export default App;
