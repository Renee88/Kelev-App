import { observable, action } from "mobx";
import axios from "axios";

class DogsStore {
    @observable dogs = []

    @action loadDogs = async () => {
        let dogs = await axios.get('http://localhost:4000/dogs')
        dogs = dogs.data
        this.dogs = dogs
    }
   
}

export default DogsStore;