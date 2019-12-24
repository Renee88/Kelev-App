import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Rate } from 'antd';
import AlertButton from './AlertButton';
import DirectionButton from './DirectionButton';

@inject("parksStore")
@observer
class ParkGeneralInfo extends Component {


    async componentDidMount (){
        const parkId = parseInt(this.props.match.params.id)
        await this.props.parksStore.getPark(parkId)
    }
    
    
    render() {
        const rating = this.props.parksStore.chosenPark? parseFloat(this.props.parksStore.chosenPark.rating) : null
        const starPercentage = (rating / 5) * 100;
        const starPercentageRounded = Math.round(starPercentage / 10) * 10 + '%'

        return (
            this.props.parksStore.chosenPark?
            <div id="general-info">
                <h1 id="park-name">{this.props.parksStore.chosenPark.park_name}</h1>
                <div id = "rating">
                <span>{rating}</span>
                <div className="stars-outer" >
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <div className="stars-inner" style={{ width: starPercentageRounded }}>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                </div> 
                <p id="per">{this.props.parksStore.chosenPark.address}</p>
                <div className="directionButton">
                <DirectionButton />
                </div>
                <div className="alertButton">
                <AlertButton />
                </div>

            </div>
            :null
        );
    }
}

export default ParkGeneralInfo;