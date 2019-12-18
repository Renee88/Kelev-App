import React, { Component } from 'react';
import '../App.css';
import '../styles/parkComponent/mainComponent.css';
import ChatButton from './ChatButton';
import ProfileButton from './profileButton';
// import { observer, inject } from 'mobx-react';

import { Layout } from 'antd';
import Ameneties from  './Ameneties'
const { Header, Footer, Sider, Content } = Layout;


// @inject("ownerStore")
// @observer

class Park extends Component {


    render() {

        return (
            <div className="parkComponent">
            <Layout id="parkLayout"  style={{height:"100vh"}}>
                <Content id="info">
                <Content id="inside">renne park pictures</Content>
                renne park details
                  
              </Content>
              
                <Content id="dogs">dogs profiles mariana</Content>
             
                <Content id="amenities"><Ameneties/> </Content>
            </Layout>
            </div>
        );
    }
}

export default Park;