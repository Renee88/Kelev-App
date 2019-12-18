import React, { Component } from 'react';
import '../App.css';
import '../styles/parkComponent/mainComponent.css';
import ChatButton from './ChatButton';
import ProfileButton from './profileButton';
// import { observer, inject } from 'mobx-react';
import ParkPictures from './ParkPictures';

import { Layout } from 'antd';

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
              
                <Content id="dogs">dogs profiles mariana</Content>
             
                <Content id="amenities">gili amenities </Content>
            </Layout>
            </div>
        );
    }
}

export default Park;