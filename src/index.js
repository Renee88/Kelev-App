import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import * as serviceWorker from './serviceWorker';
import { MapStore as mapStore } from './stores/MapStore';
import OwnerStore  from './stores/OwnerStore';

let ownerStore = new OwnerStore()
let MapStore = new mapStore()
let stores = { MapStore , ownerStore}

ReactDOM.render(<Provider {...stores}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
