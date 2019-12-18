import React from 'react';
import './App.css';
import Map from './components/Map'
import StatusButton from './components/StatusButton';
import ReCenterButton from './components/reCenterButton';


function App() {
  return (
    <div className="App">
      <Map />
      <StatusButton />
      <ReCenterButton/>
    </div>
  );
}

export default App;
