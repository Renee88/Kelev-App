import React, { Component } from 'react';
import '../App.css';
import '../styles/statusButtons.css'
import { Button } from 'antd'
import { observer, inject } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'



@inject("ownerStore","MapStore")
@observer

class StatusButton extends Component {
    
    render() {

        let ownerStore = this.props.ownerStore
        return (
            <div className="statusButtons">

                <div className="statusOne">
                    <Button style={{ display: (ownerStore.status === 1) ? true : "none" }} onClick={ownerStore.changeUserStatus} id="statusOne" type="primary" shape="circle"  >
                    <FontAwesomeIcon id="paw1" icon={faPaw} />
                        <span>Lets GO</span>
                    </Button>
                </div>

                <div className="statusTwo">
                    <Button style={{ display: (ownerStore.status === 2) ? true : "none" }} onClick={ownerStore.changeUserStatus} id="statusTwo" type="primary" shape="circle"  >
                    <FontAwesomeIcon id="paw2" icon={faPaw} />
                        <span id="part1">I'm On</span> 
                        <span id="part2">My Way!</span>
                    </Button>
                </div>

                <div className="statusThree">
                    <Button style={{ display: (ownerStore.status === 3) ? true : "none" }} onClick={ownerStore.changeUserStatus} id="statusThree" type="primary" shape="circle"  >
                    {/* <FontAwesomeIcon id="paw3" icon={faPaw} /> */}

                        <span id="part3">At the park</span>

                    </Button>
                </div>

            </div>
        );
    }
}

export default StatusButton;