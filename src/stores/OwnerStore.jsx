import { observable, action, computed } from 'mobx';
import axios from 'axios';

class OwnerStore {
    @observable id = null
    @observable name
    @observable picture
    @observable email
    @observable dogs 
    @observable status = 1
    @observable activeMarker = false
    @observable currUser

    @action async getOwnerDetails(email){
        let ownerDetails = await axios.get(`http://localhost:4000/owner/${email}`)
        ownerDetails = ownerDetails.data
        this.currUser = ownerDetails
    }


    @action changeStatus = (userStatus = 1) => {

        if (this.activeMarker) {
            if (this.status <= 2) {
                this.status += 1
            } else if (this.status === 3) {
                this.status = 1
            }
            return this.status
        } else {
            alert("please choose park")
        }
    }

    @action changeUserStatus = async () => {
        const id = 22
        let owner = await axios.get(`http://localhost:4000/owner/dogs/${id}`)
        let newStatus = this.changeStatus(owner.data[0].owner_status)
        await axios.put('http://localhost:4000/owner', { userStatus: newStatus })
    }

    @action addDogToOwner(dog) {
        this.dogs.push(dog)
    }

    @action async getOwnerDogs(id) {
        if(id){
            let dogs = await axios.get(`http://localhost:4000/owner/dogs/${id}`)
            dogs = dogs.data
            if (dogs.length) {
                this.dogs = dogs
            } 
        }

    }
}

export default OwnerStore;