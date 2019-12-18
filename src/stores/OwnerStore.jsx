import { observable, action, computed } from 'mobx';

class OwnerStore {
    @observable id = null
    @observable name
    @observable picture
    @observable email
    @observable dogs = []
    @observable status = 1

    @action changeStatus = () => {


        if (this.status < 3) {
            this.status += 1

        } else if (this.status === 3) {
            this.status = 1

        }

    }

    @action addDogToOwner(dog){
        this.dogs.push(dog)
    }


}

export default OwnerStore;