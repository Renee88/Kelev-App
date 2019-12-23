import { observable, action } from "mobx";
import axios from 'axios'


class ParksStore {
    @observable parks = []
    @observable chosenPark
    @observable parkPhoto

    @action loadParks = async () => {
        const parks = await axios.get('http://localhost:4000/map')
        this.parks = parks.data
    }

    @action async getPark(id) {
        let park = await axios.get(`http://localhost:4000/park/${id}`)
        let chosenPark = (park.data)
        console.log(chosenPark)
        this.chosenPark = chosenPark
        this.parkRating = chosenPark.rating
    }

    @action insertId = (id) => {
        this.parkId = id
    }

    async getPhoto(photoReference) {
        photoReference = 'CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU'
       const photo = await axios.get(`http://localhost:4000/park-photo/${photoReference}`)
       this.parkPhoto = photo.data
    }

}

export default ParksStore;