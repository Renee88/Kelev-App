import { observable, action, computed } from 'mobx';
import axios from 'axios';
import ParksStore from './ParksStore';

export class MapStore {

    @observable location = {}
    @observable markers = [];
    @observable watchPos = {}

    @action getParks(parks) {
        this.markers = [...this.markers, ...parks]
    }

    @action getDirections = () => {
        axios.post('http://localhost:4000/directions')
            .then(res => console.log(res))
    }

    @action getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        } else {
            alert("Geolocation is not supported by this browser.")
        }
    }

    @action getCoordinates = (position) => {
        this.location.latitude = position.coords.latitude
        this.location.longitude = position.coords.longitude
    }

    @action watchPosition = () => {
        let id = navigator.geolocation.watchPosition((position) => {
            this.watchPos.latitude = position.coords.latitude
            this.watchPos.longitude = position.coords.longitude
        }, null , {distanceFilter : 10}) 
            

        
    }
}