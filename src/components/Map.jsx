import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../styles/popup.css';
import CurrentLocation from './CurrentLocation';
import { Marker, InfoWindow, GoogleApiWrapper, Polyline } from 'google-maps-react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';

@inject("MapStore", "ownerStore", "parksStore")
@observer
class MapContainer extends Component {
    constructor() {
        super()

        this.state = {
            showingInfoWindow: false,
            activeMarker: null,
            selectedPlace: {},
            mins: '0 mins',
            distance: 0,
            polyline: []
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
            showingInfoWindow: true,
            polyline: this.props.MapStore.polyline
        }, function () {
            this.props.ownerStore.activeMarker = true
        });
    }

    getDistance = (id) => {
        let marker = this.props.MapStore.markers.find(m => m.id === id)
        let origin = `${this.props.MapStore.location.latitude},${this.props.MapStore.location.longitude}`
        let destination = `${marker.position.lat},${marker.position.lng}`

        axios.post('http://localhost:4000/distance', { origin, destination })
            .then(res => {
                console.log(res)
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
            }, function () {
                this.props.ownerStore.activeMarker = false
                this.props.MapStore.polyline = []
            });
        }
    }

    beAtThePark = async () => {
        if (this.state.meters < 50 && this.props.ownerStore.status === 2) {
            await this.props.ownerStore.changeUserStatus(2)
        }
    }

    componentDidMount = async () => {
        navigator.geolocation.watchPosition((position) => {
            this.props.MapStore.location.latitude = position.coords.latitude
            this.props.MapStore.location.longitude = position.coords.longitude

            if (this.props.ownerStore.activeMarker && (this.props.ownerStore.status === 3 || this.props.ownerStore.status === 2)) {
                this.getDistance(this.state.activeMarker.id)
            }
        }, null, { enableHighAccuracy: true })

        const parks = this.props.parksStore.parks
        this.props.MapStore.getParks(parks)
    }

    render() {
        return (
            <div onClick={this.onClose}>
                <CurrentLocation
                    centerAroundCurrentLocation
                    google={this.props.google}
                >
                    <Marker
                        position={{ lat: this.props.MapStore.location.latitude, lng: this.props.MapStore.location.longitude }}
                        name={'current location'}
                        icon={{
                            url: "https://cdn4.iconfinder.com/data/icons/flat-colored-animal-faces/32/dog_front-512.png",
                            scaledSize: new window.google.maps.Size(60, 60)
                        }} />

                    {this.props.MapStore.markers.map((m, i) =>
                        <Marker
                            key={i}
                            onClick={this.onMarkerClick}
                            id={m.id}
                            position={m.position}
                        />)}

                    <Polyline
                        path={this.props.MapStore.polyline}
                        strokeColor="#3471eb"
                        strokeOpacity={0.7}
                        strokeWeight={6} />

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
                                : null}
                        </Router>
                    </InfoWindow>
                </CurrentLocation>
            </div>);
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCGMsr5VxvZjUuEatLh04zZqxR9dM4EpCY'
})(MapContainer)