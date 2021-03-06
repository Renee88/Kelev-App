import React, { Component } from 'react';
import '../App.css';
import '../styles/parkComponent/mainComponent.css';
import DogsInPark from './DogsInPark';
import ParkPictures from './ParkPictures';
import { Layout } from 'antd';
import Amenities from  './Amenities'
import ParkGeneralInfo from './ParkGeneralInfo';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { observer, inject } from 'mobx-react';

const { Header, Footer, Sider, Content } = Layout;

@inject("parksStore","ownerStore")
@observer
class Park extends Component {

    render() {
        return (
            <div className="parkComponent">
            <Layout id="parkLayout"  style={{height:"100vh"}}>
                <Content id="info">
                <Content id="inside">
                    <Link to = {`/home/${this.props.ownerStore.currUser.owner_id}`}><div id = "back-button1"><i className="fas fa-chevron-left"></i></div></Link>
                    <ParkPictures match = {this.props.match} />
                </Content>
                <Content>

                   
                    <ParkGeneralInfo match = {this.props.match}/>

                </Content>

              </Content>
              <div id="spans">
                <span id="atThePark">4 at the park</span><span id="onTheWay">6 on the way</span>
                <Content id="dogs"><DogsInPark /></Content>            
                </div>
                
                <Content id="amenities"><Amenities/> </Content>
            </Layout>
            </div>
        );
    }
}

export default Park;