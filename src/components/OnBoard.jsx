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
import { BrowserRouter as Router ,Link } from 'react-router-dom';



import '../styles/flickity.css'
import { Button, Icon } from 'antd';
import { inject, observer } from "mobx-react";
import { observable } from "mobx";

@inject("ownerStore")
@observer
class SimpleSlider extends Component {
    
    async componentDidMount(){
        const email = 'gilisinai@gmail.com'
    await this.props.ownerStore.getOwnerDetails(email)
    }

    render() {
        const settings = {
            arrows: true,
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1


        };
        return this.props.ownerStore.currUser ?
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

                   


                    <Icon id="leftIcon" type="left" />
                    <Icon id="rightIcon" type="right" />
                </div>

               
                <Link to={`/home/${this.props.ownerStore.currUser.owner_id}`}>
                    <Button id="startBtn" type="primary" size="large">
                        Start
                     </Button>
                </Link>
              

                <p>Already a member? Login</p>
            </div>
            : null
    }
}

export default SimpleSlider;