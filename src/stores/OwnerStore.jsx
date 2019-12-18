import { observable } from "mobx";

@observable
class OwnerStore {
    @observable name
    @observable picture
    @observable email
    @observable status
    @observable dogs
}

export default OwnerStore;