import React, { Component } from 'react';
import '../App.css';
import '../styles/parkComponent/mainComponent.css';
import ChatButton from './ChatButton';
import { Carousel } from 'antd';
import { Layout } from 'antd';
import { observer, inject } from 'mobx-react';
import requestPromise from 'request-promise';
import cover from '../pictures/cute-dogs-park-scene_24877-51220.jpg'


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
                        {this.props.parksStore.parkPhotos != cover ? this.props.parksStore.parkPhotos.map(p=><img id="imgheader" src={p} />) : this.props.parksStore.parkPhotos.map(p=><img id="no-imgheader" src={p} />)}
                    </div>
                    
                </Carousel>

            </div>
        );
    }
}

export default ParkPictures;