import { observable, action, computed } from 'mobx';
import axios from 'axios';

class OwnerStore {
    @observable name
    @observable picture
    @observable email
    @observable dogs
    @observable status = 1

    @action changeStatus = (userStatus = 1) => {


        if (this.status < 3) {
            this.status += 1

        } else if (this.status === 3) {
            this.status = 1

        }

    }

    @action changeUserStatus = async () => {
        let owner =  await axios.get('http://localhost:4000/owner')
        this.changeStatus(owner.owner_status)
    }


}

export default OwnerStore;