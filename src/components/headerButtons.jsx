import React, { Component } from 'react';
import '../App.css';
import { Button } from 'antd'
// import { observer, inject } from 'mobx-react';


// @inject("ownerStore")
// @observer

class HeaderButtons extends Component {


    render() {

        return (
            <div className="headerButtons">

                <div className="profileButton">
                    <Button id="profileBtn" type="primary" shape="circle"  >

                    </Button>
                </div>

                <div className="chatButton">
                    <Button id="chatBtn" type="primary" shape="circle"  >

                    </Button>
                </div>
            </div>
        );
    }
}

export default HeaderButtons;