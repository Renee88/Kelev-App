import React, { Component } from 'react';
import '../App.css';
import { Button } from 'antd'
import ChatButton from './ChatButton';
import ProfileButton from './ProfileButton';
// import { observer, inject } from 'mobx-react';


// @inject("ownerStore")
// @observer

class HeaderButtons extends Component {


    render() {

        const ownerId = this.props.ownerId
        return (
            <div className="headerButtons">
                <ProfileButton ownerId = {ownerId}/>
                <ChatButton />
            </div>
        );
    }
}

export default HeaderButtons;