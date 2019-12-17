import { observable, action, computed } from 'mobx';


export class MapStore {
    @observable markers = [
        {
            name: 'park',
            position: {
                lat: 40.854885,
                lng: -88.081807
            }
        }
    ];

    @observable location ={}
        
    @computed get latitude()  {
        return this.location.latitude
    }

    @computed get longitude() {
        return this.location.longitude
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