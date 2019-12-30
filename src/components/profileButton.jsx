import React, { Component } from 'react';
import '../App.css';
import '../styles/profileButton.css'
import { Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 


// import { observer, inject } from 'mobx-react';


// @inject("ownerStore")
// @observer

class ProfileButton extends Component {


    render() {
        // const id = 22
        const id = this.props.id 
        console.log(id)
        return (

            <div className="profileButton">
                <Link to={`/main-profile/${id}`}>
                    <Button id="profileBtn" type="primary" shape="circle"  >
                        <FontAwesomeIcon icon={faDog} />
                    </Button>
                </Link>

            </div >
        );
    }
}



export default ProfileButton;