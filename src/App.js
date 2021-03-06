import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Park from './components/Park';
import { inject, observer } from 'mobx-react';
import OnBoard from './components/OnBoard';
import Profile from './components/Profile/Profile';
import ProfileList from './components/Profile/ProfileList';
import MainProfile from './components/Profile/MainProfile';
import SplashScreen from './components/Splash';
import { PopoverWrapper } from '@terebentina/react-popover';
import Home from './components/Home';


@inject("parksStore", "MapStore", "dogsStore", "ownerStore")
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
    const email = 'gilisinai@gmail.com'
    await this.props.ownerStore.getOwnerDetails(email)
  }

  render() {
    return this.props.ownerStore.currUser ?
      <Router >
        <div  className="App">
          <Route exact path={`/home/:ownerId`} render = {({match}) => <Home match = {match}/>}  />
            
          <Route path="/" exact render={() => <SplashScreen />} />

          <Route path="/onboard" exact render={() => <OnBoard />} />
          <Route path="/dog-profiles/:ownerId"  render={({match}) => <Profile match = {match} />} />
          <Route path="/park/:parkId" exact render={({match}) => <Park chosenPark = {this.state.chosenPark} match = {match}/>} />
          <Route path="/main-profile/:ownerId"  render={({match}) => <MainProfile match ={match} />} />
        </div>
      </Router>
      :null
    
  }
}
export default App;
