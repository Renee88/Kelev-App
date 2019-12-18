import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Marker } from 'google-maps-react';

@inject("MapStore")
@observer
class ParkMarker extends Component {
    
    onMarkerClick = () => {
        this.props.MapStore.showingInfoWindow = true
        this.props.MapStore.activeMarker = this.props.m
    }

    render() {
        return (
            <Marker
                key={this.props.m.id}
                onClick={this.onMarkerClick}
                position={this.props.m.position}
            />
        );
    }
}

export default ParkMarker;