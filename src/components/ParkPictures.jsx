import React, { Component } from 'react';
import '../App.css';
import '../styles/parkComponent/mainComponent.css';
import ChatButton from './ChatButton';
import ProfileButton from './profileButton';
import { Carousel } from 'antd';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


// @inject("ownerStore")
// @observer

class ParkPictures extends Component {


    render() {

        return (
            <div className="parkPictures">
                <Carousel >
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default ParkPictures;