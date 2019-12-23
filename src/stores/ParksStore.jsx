import { observable, action } from "mobx";
import axios from 'axios'

class ParksStore{
    @observable parks = []
    @observable chosenPark 
    @observable parkRating 
    @observable parkId

    @action loadParks = async() =>{
       const parks = await axios.get('/map')
       this.parks = parks.data
    }

    @action async getPark(id){
        console.log(id)
        let park = await axios.get(`/park/${id}`)
        let chosenPark = park.data
        this.chosenPark = chosenPark
    }

    @action insertId = (id) =>{
        this.parkId = id
    } 
    
}

export default ParksStore;