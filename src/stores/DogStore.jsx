import { observable, action } from "mobx";
import axios from 'axios';
import OwnerStore from "./OwnerStore";


class DogStore  {
    @observable id = null
    @observable dog_name
    @observable dog_picture
    @observable gender = "female"
    @observable age
    @observable weight
    @observable vaccinated = false
    @observable neutered = false
    @observable owner_id = 22
    @observable dog_status = 1
    @observable dogForEdit
    
    @action getDogInput(inputName, value){
        this[inputName] = value
    }
    
    @action saveNewDog = async  () => {
        let dogsOfOwner = await axios.post('http://localhost:4000/dog-profile', {
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
        return dogsOfOwner.data
    }

    @action async getDog(dogId){
        let dog = await axios.get(`http://localhost:4000/dog/${dogId}`)
        dog = dog.data
        this.dogForEdit = dog
    }

    @action editDogField = async (fieldName, dog) => {
        const dogId = dog.dog_id
        await axios.put(`http://localhost:4000/dog-profile/${dogId}`, {
            fieldName,
            fieldValue: dog[fieldName]
        })
    }

}

export default DogStore;