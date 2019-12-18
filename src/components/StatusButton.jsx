import React, { Component } from 'react';
import '../App.css';
import { Button } from 'antd'
import { observer, inject } from 'mobx-react';


@inject("ownerStore")
@observer

class StatusButton extends Component {

    

    render() {

        let ownerStore = this.props.ownerStore
        return (
            <div className="statusButtons">

                <div className="statusOne">
                    <Button style={{ display: (ownerStore.status === 1) ? true : "none" }} onClick={ownerStore.changeStatus} id="statusOne" type="primary" shape="circle"  >
                    <span id="paw1">paw</span>

                        <span>Go</span>
                    </Button>
                </div>

                <div className="statusTwo">
                    <Button style={{ display: (ownerStore.status === 2) ? true : "none" }} onClick={ownerStore.changeStatus} id="statusTwo" type="primary" shape="circle"  >
                        <span id="paw2">paw</span>
                        <span id="part1">I'm On</span> 
                        <span id="part2">My Way!</span>
                    </Button>
                </div>

                <div className="statusThree">
                    <Button style={{ display: (ownerStore.status === 3) ? true : "none" }} onClick={ownerStore.changeStatus} id="statusThree" type="primary" shape="circle"  >
                        
                        <span id="part3">At the park</span>

                    </Button>
                </div>

            </div>
        );
    }
}

export default StatusButton;
