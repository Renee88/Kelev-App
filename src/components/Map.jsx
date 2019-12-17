import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("MapStore")
@observer
class MapContainer extends Component {

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

            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCGMsr5VxvZjUuEatLh04zZqxR9dM4EpCY"
})(MapContainer)