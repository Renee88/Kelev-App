import React, { Component } from 'react';
import '../App.css';
import '../styles/parkComponent/mainComponent.css';
import ChatButton from './ChatButton';
import ProfileButton from './profileButton';
import { Carousel } from 'antd';
import { Layout } from 'antd';
import { observer, inject } from 'mobx-react';
import requestPromise from 'request-promise';
const apiKey = "AIzaSyBJIbKNrO_UfxyAeFsFsJwSqYYKg7_MHRk"


@inject("parksStore")
@observer
class ParkPictures extends Component {

    async componentDidMount (){
        const parkId = parseInt(this.props.match.params.id)
        await this.props.parksStore.getPark(parkId)
        this.props.parksStore.getPhoto()
        let chosenParkPhoto = this.props.parksStore.parkPhoto
        console.log(chosenParkPhoto)
    }

    render() {


        return (
            <div className="parkPictures">
                <Carousel autoplay>
                    <div>
                    <img id="imgheader" src={require('../pictures/1.jpg')} />
                    </div>
                    <div>
                    <img id="imgheader" src={require('../pictures/2.jpg')} />
                    </div>
                    <div>
                    <img id="imgheader" src={require('../pictures/3.jpg')} />
                    </div>
                    <div>
                    <img id="imgheader" src={require('../pictures/4.jpg')} />
                    </div>
                </Carousel>

            </div>
        );
    }
}

export default ParkPictures;