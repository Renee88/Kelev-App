import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("MapStore")
@observer
class MapContainer extends Component {


    componentDidMount = async () => {
        
        await this.props.MapStore.getLocation()
        
        
    }

    

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                centerAroundCurrentLocation= {true}
                initialCenter={{
                    lat: this.props.MapStore.location.latitude,
                    lng: this.props.MapStore.location.longitude
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