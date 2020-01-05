import React, { Component } from 'react';
import '../App.css';
import { Button } from 'antd'
import ChatButton from './ChatButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import ProfileButton from './ProfileButton';
import LogIn from './LogIn/LogInPage';
// import { observer, inject } from 'mobx-react';


// @inject("ownerStore")
// @observer

class HeaderButtons extends Component {


    render() {

        return (
            <div className="headerButtons">
                <ProfileButton />
                <Link to="/log-in">
                    <Button id="profileBtn" type="primary" shape="circle"  >
                        <FontAwesomeIcon icon={faDog} />
                    </Button>
                </Link>

                <ChatButton />
                
            </div>
        );
    }
}

export default HeaderButtons;