import React, { Component } from 'react';
import '../App.css';
import { Button } from 'antd';


class StatusButton extends Component {
    render() {
        return (
            <div id="header">
               <h1>example test</h1> 
            <Button type="primary" shape="circle" icon="search" />
            </div>
        );
    }
}

export default StatusButton;
