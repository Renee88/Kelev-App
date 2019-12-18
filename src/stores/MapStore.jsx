import { observable, action, computed } from 'mobx';
import axios from 'axios';

export class MapStore {
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

    @observable location = {}

    @computed get latitude() {
        return this.location.latitude
    }

    @computed get longitude() {
        return this.location.longitude
    }

    @action getDistance = (id) => {
        let marker = this.markers.find(m => m.id === id)
        let destination = [`${marker.position.lat}, ${marker.position.lng}`]
        let origin = [`32.080756, 34.775384`]
        let travelMode = 'WALKING'

        axios.post('http://localhost:4000/distance', { origin, destination, travelMode })
            .then(res => {
                marker.distance.meters = res.data.distance.value
                marker.distance.minutes = res.data.duration.text
            })
            .catch(err => console.log(`unable to get distance, ${err}`))
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