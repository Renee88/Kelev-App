import { observable } from "mobx";

@observable
class DogStore  {
    @observable name
    @observable picture
    @observable gender
    @observable age
    @observable weight
    @observable vaccinated
    @observable neutered
    @observable owner
}

export default DogStore;