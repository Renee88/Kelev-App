import { observable, action } from "mobx";
import axios from 'axios';


class DogStore  {
    @observable id = null
    @observable dog_name
    @observable dog_picture
    @observable gender = "female"
    @observable age
    @observable weight
    @observable vaccinated = false
    @observable neutered = false
    @observable owner_id = 5
    @observable dog_status = 1
    
    @action getDogInput(inputName, value){
        this[inputName] = value
    }
    
    @action saveNewDog =  () => {
        axios.post('http://localhost:4000/dog-profile', {
            dog_name: this.dog_name,
            dog_picture: this.dog_picture,
            gender: this.gender,
            age: this.age,
            weight: this.weight,
            vaccinated: this.vaccinated,
            neutered: this.neutered,
            dog_status: this.dog_status,
            owner_id: this.owner_id
        })
    }

    @action editDogField = (fieldName, dogId) => {
        axios.put('http://localhost:4000/dog-profile', {
            fieldName,
            fieldValue: this[fieldName],
            dogId
        })
    }
}

export default DogStore;