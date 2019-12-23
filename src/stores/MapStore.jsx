import { observable, action, computed } from 'mobx';
import axios from 'axios';
import ParksStore from './ParksStore';
import decodePolyline from 'decode-google-map-polyline'
export class MapStore {

    @observable location = {}
    @observable markers = [];
    @observable polyline = []

    @action getParks(parks) {
        this.markers = [...this.markers, ...parks]
    }

    @action getDirections = (destinationId) => {
        const marker = this.markers.find(m => m.id === destinationId)
        let destination = `${marker.position.lat},${marker.position.lng}`
        let currLoc = `${this.location.latitude},${this.location.longitude}`
        axios.get(`http://localhost:4000/directions/?origin=${currLoc}&destination=${destination}`)
            .then((res)=> {
                let polyline = res.data.routes[0].overview_polyline.points
                this.polyline = decodePolyline(polyline)
            
            } )
            
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