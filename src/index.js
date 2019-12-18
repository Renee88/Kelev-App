import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import * as serviceWorker from './serviceWorker';
import { MapStore as mapStore } from './stores/MapStore';
import OwnerStore  from './stores/OwnerStore';
import ParksStore from './stores/ParksStore';
import DogsStore from './stores/DogsStore';

const ownerStore = new OwnerStore()
const MapStore = new mapStore()
const parksStore = new ParksStore()
const dogsStore = new DogsStore()

console.log(dogsStore)
const stores = { MapStore , ownerStore, parksStore,dogsStore}

ReactDOM.render(<Provider {...stores}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
