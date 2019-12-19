import React, { Component } from 'react';
import '../App.css';
import '../styles/profileButton.css'
import { Icon } from 'antd';
import { Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faBell } from '@fortawesome/free-solid-svg-icons'
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 


// import { observer, inject } from 'mobx-react';


// @inject("ownerStore")
// @observer

class AlertButton extends Component {


    render() {

        return (

            <div className="alertButton">
                <Button id="alertBtn" type="primary" shape="circle"  >
                <FontAwesomeIcon icon={faBell} />
                     </Button>
            </div>
        );
    }
}



export default AlertButton;