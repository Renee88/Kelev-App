import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Park from './Park';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

@inject("MapStore","ownerStore")
@observer
class MapContainer extends Component {
    constructor() {
        super()
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            mins: '0 mins',
            distance: 0
        };
    }

    onMarkerClick = async (props, marker, e) => {
        await this.getDistance(marker.id)
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    getDistance = (id) => {
        let marker = this.props.MapStore.markers.find(m => m.id === id)
        let origin = `${this.props.MapStore.location.latitude},${this.props.MapStore.location.longitude}`
        let destination = `${marker.position.lat},${marker.position.lng}`
        axios.post('http://localhost:4000/distance', { origin, destination })
            .then(res => {
                
                console.log(res.data.rows[0].elements[0])
                this.setState({
                    mins: res.data.rows[0].elements[0].duration.text,
                    meters: res.data.rows[0].elements[0].distance.value
                },this.beAtThePark)
               
            })
            .catch(err => console.log(`unable to get distance, ${err}`))
    }

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    beAtThePark = async () => {
        if(this.state.meters < 100){
            if(this.props.ownerStore.status === 2){
                console.log(this.props.ownerStore.status)
                await this.props.ownerStore.changeUserStatus()
            }
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

                {this.props.MapStore.markers.map((m, i) =>
                    <Marker
                        key={i}
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