import { observable, action, computed } from 'mobx';
import axios from 'axios';
import ParksStore from './ParksStore';

export class MapStore {

    @observable location = {}
    @observable markers = [];


    @action getParks(parks) {
        this.markers = [...this.markers, ...parks]
    }

    @action getDirections = (destinationId) => {
        const marker = this.markers.find(m => m.id === destinationId)
        let destination = `${marker.position.lat},${marker.position.lng}`
        let currLoc = `${this.location.latitude},${this.location.longitude}`
        axios.get(`http://localhost:4000/directions/?origin=${currLoc}&destination=${destination}`)
            .then(res => console.log(res.data))
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


}