import React, { Component } from 'react';
import '../App.css';
import '../styles/parkComponent/mainComponent.css';
import ChatButton from './ChatButton';
import ProfileButton from './profileButton';
import DogsInPark from './DogsInPark';
import ParkPictures from './ParkPictures';
import { Layout } from 'antd';
import Amenities from  './Amenities'
import ParkGeneralInfo from './ParkGeneralInfo';
import { inject, observer } from 'mobx-react';
const { Header, Footer, Sider, Content } = Layout;


class Park extends Component {


    render() {
        console.log(this.props.parksStore)

        return (
            <div className="parkComponent">
            <Layout id="parkLayout"  style={{height:"100vh"}}>
                <Content id="info">
                <Content id="inside">

                    <ParkPictures />
                </Content>
                <Content>
                   
                    <ParkGeneralInfo />
                </Content>

              </Content>
              
                <Content id="dogs"><DogsInPark /></Content>
             
                <Content id="amenities"><Amenities/> </Content>
            </Layout>
            </div>
        );
    }
}

export default Park;