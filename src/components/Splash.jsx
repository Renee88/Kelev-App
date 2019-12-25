import React, { Component } from "react";


import { BrowserRouter as Router ,Link } from 'react-router-dom';
import logo from '../../src/pictures/splash.png'


import '../styles/splash.css'
import { Button, Icon } from 'antd';

export default class SplashScreen extends Component {

    render() {


        return (
            <div className="logoCompo">
                <Link to="/onboard">
              <img id="logoImg" src={logo}/>
              </Link>
            </div>

        );
    }
}