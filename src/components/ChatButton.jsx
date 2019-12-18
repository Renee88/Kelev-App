import React, { Component } from 'react';
import '../App.css';
import '../styles/chatButton.css'

import { Button } from 'antd'
// import { observer, inject } from 'mobx-react';


// @inject("ownerStore")
// @observer

class ChatButton extends Component {


    render() {

        return (

                <div className="chatButton">
                    <Button id="chatBtn" type="primary" shape="circle" icon="message"  >
                    </Button>
                </div>
        );
    }
}

export default ChatButton;