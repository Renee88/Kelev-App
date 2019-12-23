import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import StatusButton from './components/StatusButton';
import ReCenterButton from './components/reCenterButton';
import HeaderButtons from './components/headerButtons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Park from './components/Park';
import { inject, observer } from 'mobx-react';
import OnBoard from './components/OnBoard';
import Profile from './components/Profile/Profile';
import AddDog from './components/Profile/AddDog';
import ProfileList from './components/Profile/ProfileList';

@inject("parksStore", "MapStore", "dogsStore")
@observer
class App extends Component {

  constructor(){
    super()
    this.state = {
      chosenPark: {}
    }
  }

   componentDidMount = async () => {
    await this.props.parksStore.loadParks()
    await this.props.dogsStore.loadDogs()
    const parks = this.props.parksStore.parks
    this.props.MapStore.getParks(parks)
  }

  render() {
    return (
      <Router >
        <div className="App">
          <Route exact path="/"  >
            <Map />
            <StatusButton />
            <HeaderButtons />
            <ReCenterButton />
          </Route>

          <Route path="/onboard" exact render={() => <OnBoard />} />
          <Route path="/dog-profiles"  render={() => <Profile />} />

          <Route path="/park/:id" exact render={({match}) => <Park match = {match}/>} />

          </div>
      </Router>
    );
  }
}
export default App;

