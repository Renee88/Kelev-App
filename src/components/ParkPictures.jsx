import React, { Component } from 'react';
import '../App.css';
import '../styles/parkComponent/mainComponent.css';
import ChatButton from './ChatButton';
import ProfileButton from './ProfileButton';
import { Carousel } from 'antd';
import { Layout } from 'antd';
import { observer, inject } from 'mobx-react';
import requestPromise from 'request-promise';
import cover from '../pictures/cute-dogs-park-scene_24877-51220.jpg'
const apiKey = "AIzaSyBJIbKNrO_UfxyAeFsFsJwSqYYKg7_MHRk"


@inject("parksStore")
@observer
class ParkPictures extends Component {

    async componentDidMount() {
        const parkId = parseInt(this.props.match.params.id)
        await this.props.parksStore.getPark(parkId)
        console.log(this.props.parksStore.chosenPark)
        this.props.parksStore.getPhoto()
    }

    render() {

        return (
            <div className="parkPictures">
                <Carousel autoplay>
                    <div>
                        {this.props.parksStore.parkPhotos.map(p=><img id="imgheader" src={p} />)}
                    </div>
                    {/* <div>
                        <img id="imgheader" src={require('../pictures/2.jpg')} />
                    </div>
                    <div>
                        <img id="imgheader" src={require('../pictures/3.jpg')} />
                    </div>
                    <div>
                        <img id="imgheader" src={require('../pictures/4.jpg')} />
                    </div> */}
                </Carousel>

            </div>
        );
    }
}

export default ParkPictures;