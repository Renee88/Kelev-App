import { observable, action, computed } from 'mobx';
import axios from 'axios';
import ParksStore from './ParksStore';

export class MapStore {
    
    @observable location = {}
    
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

    @action getDistance = async (id) => {
        let marker = this.markers.find(m => m.id === id)
        let destination = [`${marker.position.lat}, ${marker.position.lng}`]
        let origin = [`${this.location.latitude} ,${this.location.longitude}`]
        let travelMode = 'WALKING'
         await axios.post('http://localhost:4000/distance', { origin, destination, travelMode })
            .then(res => {
                // marker.distance.meters = res.data.distance.value
                marker.distance = res.data.duration.text
            })
            .catch(err => console.log(`unable to get distance, ${err}`))
            return marker.distance
    }

    // @action getDirections = () => {
    //     axios.post('http://localhost:4000/directions')
    //         .then(res => console.log(res))
    // }

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