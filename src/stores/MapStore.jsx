import { observable, action, computed } from 'mobx';
import axios from 'axios';
import ParksStore from './ParksStore';


export class MapStore {
    
    @observable location = {}
    @observable activeMarker = {}
    @observable showingInfoWindow = false
    @observable markers = [
        {
            name: 'park',
            position: {
                lat: 32.080756,
                lng: 34.780405
            },
            id: 1,
            distance: {}
        }
    ];


    @action getParks(parks){
        this.markers = [...this.markers,...parks]
    }

    @computed get latitude() {
        return this.location.latitude
    }

    @computed get longitude() {
        return this.location.longitude
    }

    @action getDistance = () => {
        let origin = `${this.location.latitude},${this.location.longitude}`
        for (let marker of this.markers) {
            let destination = `${marker.position.lat},${marker.position.lng}`
            axios.post('http://localhost:4000/distance', { origin, destination })
                .then(res => {
                    console.log(res.data.rows[0].elements[0].duration.text)
                    marker.distance = res.data.rows[0].elements[0].duration.text
                })
                .catch(err => console.log(`unable to get distance, ${err}`))
        }
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
        this.location["latitude"] = position.coords.latitude
        this.location["longitude"] = position.coords.longitude
    }
}