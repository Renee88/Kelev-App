import { observable, action, computed } from 'mobx';

export class MapStore {
    @observable markers = [
        {
            name: 'park',
            position: {
                lat: 40.854885,
                lng: -88.081807
            }
        }
    ];

}