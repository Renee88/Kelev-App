import React, { Component } from 'react';
import '../App.css';
import '../styles/parkComponent/mainComponent.css';
import ChatButton from './ChatButton';
import ProfileButton from './profileButton';
import { Carousel } from 'antd';
import { Layout } from 'antd';
import { observer } from 'mobx-react';
// import '../pictures'
const { Header, Footer, Sider, Content } = Layout;

@observer
class ParkPictures extends Component {


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