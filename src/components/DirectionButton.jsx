import React, { Component } from 'react';
import '../App.css';
import '../styles/profileButton.css'
import { Icon } from 'antd';
import { Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faBell, faDirections } from '@fortawesome/free-solid-svg-icons'
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 

class DirectionButton extends Component {


    render() {

        return (

            <div className="directionButton">
                <Button id="directionBtn" type="primary" shape="circle"  >
                <FontAwesomeIcon icon={faDirections} />
                     </Button>
            </div>
        );
    }
}



export default DirectionButton;