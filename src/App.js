import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import StatusButton from './components/StatusButton';
import ReCenterButton from './components/reCenterButton';
import HeaderButtons from './components/headerButtons';
import { inject, observer } from 'mobx-react';

@inject("parksStore","MapStore","dogsStore")
@observer
class App extends Component {
  
  async componentDidMount(){
    await this.props.parksStore.loadParks()
    const parks = this.props.parksStore.parks
    this.props.MapStore.getParks(parks)
    await this.props.dogsStore.loadDogs()
  }

  render() {
    return (
      <div className="App">
      <Map />
      <StatusButton />
      <HeaderButtons />
      <ReCenterButton/>

    </div>
    );
  }
}

export default App;

