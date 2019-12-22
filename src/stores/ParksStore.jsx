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

    @action async getPark(id){
        // let park = await axios.get(`http://localhost:4000/park/${id}`)
        const chosenPark = this.parks.find(p=> p.id === id)
        // let chosenPark = park.data
        this.chosenPark = chosenPark
        this.parkRating = chosenPark.rating
    }

    @action insertId = (id) =>{
        this.parkId = id
    }
    
}

export default ParksStore;