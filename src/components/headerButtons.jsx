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

        const id = this.props.match ? this.props.match.params.id : 22

        return (
            <div className="headerButtons">
                <ProfileButton id = {id}/>
                <ChatButton />
            </div>
        );
    }
}

export default HeaderButtons;