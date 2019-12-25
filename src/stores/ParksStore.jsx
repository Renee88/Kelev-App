import { observable, action } from "mobx";
import axios from 'axios'
import cover from '../pictures/cute-dogs-park-scene_24877-51220.jpg'
const apiKey = "AIzaSyADCCx3k634dLQ4-Il3PJKs52pYjhcpMUA"

class ParksStore {
    @observable parks = []
    @observable chosenPark
    @observable parkPhotos = []

    @action loadParks = async () => {
        const parks = await axios.get('http://localhost:4000/map')
        this.parks = parks.data
    }

    @action async getPark(id) {
        let park = await axios.get(`http://localhost:4000/parks/${id}`)
        let chosenPark = park.data
        this.chosenPark = chosenPark
    }

    @action insertId = (id) => {
        this.parkId = id
    }

    async getPhoto() {
            const photoReferences = this.chosenPark.park_pictures.split(",")
            console.log(photoReferences)
            if(photoReferences != "null"){
                for(let photoReference of photoReferences){
                    const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=${photoReference}&key=${apiKey}`
                    this.parkPhotos.push(photoUrl)  
                }
            } else {
                this.parkPhotos.push(cover)
            }
    }

}

export default ParksStore;