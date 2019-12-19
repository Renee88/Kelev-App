import { observable, action } from "mobx";
import axios from 'axios'

class ParksStore{
    @observable parks = []
    @observable chosenPark
    @observable parkRating
    @observable parkId

    @action loadParks = async() =>{
       const parks = await axios.get('http://localhost:4000/map')
       this.parks = parks.data
    }

    @action getPark = async (id)=>{
        let park = await axios.get(`http://localhost:4000/park/${id}`)
        console.log(park.data)
        let chosenPark = park.data
        this.chosenPark = chosenPark
        this.parkRating = park.rating
    }

    @action insertId = (id) =>{
        this.parkId = id
        console.log(this.parkId)
    }
    
}

export default ParksStore;