import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Park from './Park';
import '../styles/popup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faTimes, faTimesCircle, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

@inject("MapStore", "ownerStore", "parksStore")
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
        await this.props.parksStore.insertId(marker.id)
        await this.props.parksStore.getPark(marker.id)
        await this.props.MapStore.getDirections(marker.id)
        
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        }, function () {
        });
    }

    getDistance = (id) => {
        let marker = this.props.MapStore.markers.find(m => m.id === id)
        let origin = `${this.props.MapStore.location.latitude},${this.props.MapStore.location.longitude}`
        let destination = `${marker.position.lat},${marker.position.lng}`
        console.log(origin + " " + destination)
        axios.post('http://localhost:4000/distance', { origin, destination })
            .then(res => {

                // console.log(res.data.rows[0].elements[0])
                this.setState({
                    mins: res.data.rows[0].elements[0].duration.text,
                    meters: res.data.rows[0].elements[0].distance.value
                }, this.beAtThePark)

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
        if (this.state.meters < 100) {
            if (this.props.ownerStore.status === 2) {
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
                    {this.state.activeMarker != null ?
                    <Link to={`/park/${this.state.activeMarker.id}`} style={{ textDecoration: "none" }} >
                    
                        <div className="popupText" id="eta" >

                            <i className="far fa-clock"></i>
                            {this.state.mins} away

                                </div>

                        <hr style={{ textDecoration: "none" }}></hr>

                        <div className="popupText" id="numDogs" >
                            <i className="far fa-map"></i>
                            4 dogs at the park</div>
                    </Link>
                            :null}
                    </Router>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCGMsr5VxvZjUuEatLh04zZqxR9dM4EpCY"
})(MapContainer)