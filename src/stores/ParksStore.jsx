import { observable, action } from "mobx";
import axios from 'axios'

class ParksStore{
    @observable parks = []

    @action loadParks = async() =>{
       const parks = await axios.get('http://localhost:4000/map')
       this.parks = parks.data
    }
    
}

export default ParksStore;