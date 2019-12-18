import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PopUp from './PopUp';
import Park from './Park';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


@inject("MapStore")
@observer
class MapContainer extends Component {
    constructor() {
        super()
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            mins: 0
        };
    }

    onMarkerClick = async (props, marker, e) => {
        let distance = await this.props.MapStore.getDistance(this.props.MapStore.markers[0].id)

        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            mins: distance,
            showingInfoWindow: true
        });
    }

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    componentDidMount = async () => {
        await this.props.MapStore.getLocation()
    }

    render() {
        const currentPosition = {
            lat: this.props.MapStore.location.latitude,
            lng: this.props.MapStore.location.longitude
        }
        return (
            // <Router>

            <Map
                google={this.props.google}
                zoom={14}
                fullscreenControl={false}
                streetViewControl={false}
                mapTypeControl={false}
                center={currentPosition}
                onClick={this.onClose}
                setCenter={currentPosition}
                centerAroundCurrentLocation={true}
                streetView={false}

                initialCenter={{
                    lat: this.props.MapStore.location.latitude,
                    lng: this.props.MapStore.location.longitude
                }}
            >
                <Marker
                    position={currentPosition}
                    icon={{
                        url: "https://cdn4.iconfinder.com/data/icons/flat-colored-animal-faces/32/dog_front-512.png",
                        scaledSize: new window.google.maps.Size(60, 60)
                    }}
                />

                {this.props.MapStore.markers.map(m =>
                    <Marker
                        onClick={this.onMarkerClick}
                        id={m.id}
                        position={m.position}
                    />)}

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <Router>
                        <Link to="/park" style={{ textDecoration: "none" }} >
                    <div>{this.state.mins} away</div>
                    <hr></hr>

                            <div>4 dogs at the park</div>
                        </Link>
                       

                    </Router>

                </InfoWindow>



            </Map>


        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCGMsr5VxvZjUuEatLh04zZqxR9dM4EpCY"
})(MapContainer)