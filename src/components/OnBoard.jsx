import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../pictures/5.png'
import img2 from '../pictures/6.png'
import img3 from '../pictures/7.png'
import onTheWay from '../pictures/onTheWay.png'
import FindPark from '../pictures/FindPark.png'
import AtThePark from '../pictures/AtThePark.png'


import '../styles/flickity.css'
import { Button, Icon } from 'antd';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            arrows: true,
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1


        };
        return (
            <div className="caroo">

                <Slider {...settings}>
                    <div className="test">
                        <div className="illustration">
                            <img id="img1" src={AtThePark} alt="" />
                        </div>
                        <h2>SEE WHO IS AT THE PARK</h2>
                        <span className="text">Watch who currently is at the park Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu velit non</span>
                    </div>
                    <div className="test">
                        <div className="illustration">
                            <img id="img1" src={onTheWay} alt="" />
                        </div>
                        <h2>SEE WHO IS ON THEIR WAY</h2>
                        <span className="text">Send a message and schedule mutual trips Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu velit non</span>
                    </div>
                    <div className="test">
                        <div className="illustration">
                            <img id="img1" src={FindPark} alt="" />
                        </div>
                        <h2>FIND THE CLOSEST DOG PARK</h2>
                        <span className="text">Locate a park, watch stats, photos, reviews and what is the best time to come</span>
                    </div>

                </Slider>

                <div className="buttons">
                    {/* <button type="button" id="forward" > previous</button> */}
                    {/* <button type="sbutton" id="previous" > forward</button> */}
                    <Icon id="leftIcon" type="left" />
                    <Icon id="rightIcon" type="right" />
                </div>
                <Button id="startBtn" type="primary" size="large">
                    Start
                     </Button>
                <p>Already a member? Login</p>
            </div>

        );
    }
}