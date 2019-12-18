import React, { Component } from 'react';
import {InfoWindow } from 'google-maps-react';
import { observer, inject } from 'mobx-react';

@inject("MapStore")
@observer
class PopUp extends Component {
    
    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.props.MapStore.activeMarker = null
            this.props.MapStore.showingInfoWindow = false
        }
    }

    render() {
        let MapStore = this.props.MapStore
        return (
            <InfoWindow
                key={MapStore.activeMarker.id}
                marker={MapStore.activeMarker}
                visible={MapStore.showingInfoWindow}
                onClose={this.onClose}
            >
                <div>{MapStore.activeMarker.distance} away</div>
                <hr></hr>
                <div>4 dogs at the park</div>
            </InfoWindow>
        );
    }
}

export default PopUp;