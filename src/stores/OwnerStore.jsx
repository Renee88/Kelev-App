import { observable } from "mobx";

@observable
class OwnerStore {
    @observable name
    @observable picture
    @observable email
    @observable dog
}

export default OwnerStore;