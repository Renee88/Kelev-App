import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Rate } from 'antd';
import AlertButton from './AlertButton';
import DirectionButton from './DirectionButton';

@inject("parksStore")
@observer
class ParkGeneralInfo extends Component {
    
    constructor(){
        super()
        this.state = {
            chosen_park: {}
        }
    }

    async componentDidMount() {
        await this.props.parksStore.getPark()
        const chosen_park = this.props.parksStore.chosenPark
        this.setState({chosen_park})
    }


    render() {
        const rating = this.props.parksStore.parkRating
        const starPercentage = (rating / 5) * 100;
        const starPercentageRounded = Math.round(starPercentage / 10) * 10 + '%'

        return (
            <div id="general-info">
                <h1 id="park-name">{this.state.chosen_park.park_name}</h1>
                <div id = "rating">
                <span>{rating + '.0'}</span>
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
                <p>{this.state.chosen_park.address}</p>
                <div className="directionButton">
                <DirectionButton />
                </div>
                <div className="alertButton">
                <AlertButton />
                </div>

            </div>
        );
    }
}

export default ParkGeneralInfo;