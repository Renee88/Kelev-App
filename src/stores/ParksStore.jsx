import { observable } from "mobx";
import ParksStore from './ParkStore'

class ParksStore{
    @observable parks = []
    
}

export default ParksStore;