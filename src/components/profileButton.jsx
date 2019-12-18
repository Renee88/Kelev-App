import React, { Component } from 'react';
import '../App.css';
import '../styles/profileButton.css'
import { Icon } from 'antd';
import { Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 


// import { observer, inject } from 'mobx-react';


// @inject("ownerStore")
// @observer

class ProfileButton extends Component {


    render() {

        return (

            <div className="profileButton">
                <Button id="profileBtn" type="primary" shape="circle"  >
                <FontAwesomeIcon icon={faDog} />
                     </Button>
            </div>
        );
    }
}



export default ProfileButton;