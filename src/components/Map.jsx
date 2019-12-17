import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("MapStore")
@observer
class MapContainer extends Component {
    constructor() {
        super()
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                initialCenter={{
                    lat: 40.854885,
                    lng: -88.081807
                }}
            >
                {this.props.MapStore.markers.map(m =>
                    <Marker
                        onClick={this.onMarkerClick}
                        name={m.name}
                        position={m.position}
                    />)}

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCGMsr5VxvZjUuEatLh04zZqxR9dM4EpCY"
})(MapContainer)