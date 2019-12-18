import React, { Component } from 'react';
import '../App.css';
import '../styles/parkComponent/mainComponent.css';
import ChatButton from './ChatButton';
import ProfileButton from './profileButton';
import DogsInPark from './DogsInPark';
// import { observer, inject } from 'mobx-react';
import ParkPictures from './ParkPictures';

import { Layout } from 'antd';
import Ameneties from  './Amenities'
const { Header, Footer, Sider, Content } = Layout;


// @inject("ownerStore")
// @observer

class Park extends Component {


    render() {

        return (
            <div className="parkComponent">
            <Layout id="parkLayout"  style={{height:"100vh"}}>
                <Content id="info">
                <Content id="inside">
                    <ParkPictures />
                </Content>
                
                  
              </Content>
              
                <Content id="dogs"><DogsInPark /></Content>
             
                <Content id="amenities"><Ameneties/> </Content>
            </Layout>
            </div>
        );
    }
}

export default Park;