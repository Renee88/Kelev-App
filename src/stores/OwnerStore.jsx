import { observable, action, computed } from 'mobx';
import axios from 'axios';

class OwnerStore {
    @observable id = null
    @observable name
    @observable picture
    @observable email
    @observable dogs = []
    @observable status = 1

    @action changeStatus = (userStatus = 1) => {


        if (this.status < 3) {
            this.status += 1

        } else if (this.status === 3) {
            this.status = 1

        }
        return this.status
    }

    @action changeUserStatus = async () => {
        let owner =  await axios.get('http://localhost:4000/owner')
        console.log(owner.data[0].owner_status)
        let newStatus = this.changeStatus(owner.data.owner_status)
        await axios.put('http://localhost:4000/owner', {userStatus: newStatus })
    }

    @action addDogToOwner(dog){
        this.dogs.push(dog)
    }


}

export default OwnerStore;