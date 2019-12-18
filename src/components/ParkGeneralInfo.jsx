import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Rate } from 'antd';

@inject("parksStore")
@observer
class ParkGeneralInfo extends Component {
    async componentDidMount() {
        await this.props.parksStore.getPark()
    }
    render() {
        const rating = this.props.parksStore.parkRating
        const starPercentage = (rating / this.starTotal) * 100;
        const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`

        return (
            <div className="stars-outer" >
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <div className="stars-inner" style={{ width: starPercentageRounded }}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>
        );
    }
}

export default ParkGeneralInfo;