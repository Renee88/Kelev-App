import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

export class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google}
                zoom={14}
                fullscreenControl={false}
                streetViewControl={false}
                mapTypeControl={false}
                initialCenter={{
                    lat: 40.854885,
                    lng: -88.081807
                }}>

            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCGMsr5VxvZjUuEatLh04zZqxR9dM4EpCY"
})(MapContainer)