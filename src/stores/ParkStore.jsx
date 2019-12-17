import { observable } from "mobx";

class ParkStore {
    @observable long
    @observable lat
    @observable address
    @observable picture
    @observable stats
    @observable numOnTheWay
    @observable numInThePark
}

export default ParkStore;