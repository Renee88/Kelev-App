import React, { Component } from 'react';
import { Button } from 'antd';
import { observer, inject } from 'mobx-react';

@inject("MapStore")
@observer
class ReCenterButton extends Component {
    render() {
        return (
            <div >
                <Button id="reCenterButton"shape="circle" icon="drag" onClick={this.props.MapStore.getLocation}></Button>
            </div>
        );
    }
}

export default ReCenterButton;