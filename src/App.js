import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import StatusButton from './components/StatusButton';
import HeaderButtons from './components/headerButtons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Park from './components/Park';
import { inject, observer } from 'mobx-react';
import OnBoard from './components/OnBoard';
import EditDog from './components/EditDog_test'
import Profile from './components/Profile/Profile';
import ProfileList from './components/Profile/ProfileList';
import MainProfile from './components/Profile/MainProfile';
import SplashScreen from './components/Splash';
import { PopoverWrapper } from '@terebentina/react-popover';
import LogIn from './components/LogIn/LogInPage';


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
    
  }

  render() {
    return (
      <Router >
        <div  className="App">
          <Route exact path="/"  >
            <Map />
            <StatusButton />
            <HeaderButtons />
          </Route>

          <Route path="/splash" exact render={() => <SplashScreen />} />

          <Route path="/onboard" exact render={() => <OnBoard />} />
          <Route path="/dog-profiles"  render={() => <Profile />} />
          <Route path="/park/:id" exact render={({match}) => <Park chosenPark = {this.state.chosenPark} match = {match}/>} />
          <Route path="/main-profile"  render={() => <MainProfile />} />
          <Route path="/log-in"  render={() => <LogIn />} />

        </div>
      </Router>
    );
  }
}
export default App;
