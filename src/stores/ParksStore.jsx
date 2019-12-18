import { observable, action } from "mobx";
import axios from 'axios'

class ParksStore{
    @observable parks = []
    @observable chosenPark
    @observable parkRating

    @action loadParks = async() =>{
       const parks = await axios.get('http://localhost:4000/map')
       this.parks = parks.data
    }

    @action getPark = async ()=>{
        let park = await axios.get('http://localhost:4000/park')
        console.log(park)
        park = park.data
        this.chosenPark = park
        this.parkRating = park.rating
    }
    
}

export default ParksStore;