import { observable } from "mobx";

@observable
class DogStore  {
    @observable id = null
    @observable dog_name
    @observable dog_picture
    @observable gender
    @observable age
    @observable weight
    @observable vaccinated
    @observable neutered
    @observable owner_id
    @observable dog_status = 1
}

export default DogStore;