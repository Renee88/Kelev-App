import { observable, action } from "mobx";
import axios from 'axios'
import request from "request";
const apiKey = "AIzaSyBJIbKNrO_UfxyAeFsFsJwSqYYKg7_MHRk"


class ParksStore{
    @observable parks = []
    @observable chosenPark
    @observable parkPicUrl

    @action loadParks = async() =>{
       const parks = await axios.get('http://localhost:4000/map')
       this.parks = parks.data
    }

    @action async getPark(id){
        let park = await axios.get(`http://localhost:4000/park/${id}`)
        let chosenPark = park.data
        this.chosenPark = chosenPark
        this.parkRating = chosenPark.rating
    }

    @action insertId = (id) =>{
        this.parkId = id
    }

    getPhoto(photoReference){
        axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=${apiKey}`)
        .then(function(response){
            const parkPicUrl = response.data
            console.log(parkPicUrl)
        })

    
    }
    
}

export default ParksStore;