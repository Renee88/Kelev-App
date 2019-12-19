import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Popup extends Component {
    render() {
        return (
            <div className = "popup">
                <a href="/park" style={{ textDecoration: "none" }} >
                    <div>{this.props.mins} away</div>
                    <hr></hr>
                    <div>4 dogs at the park</div>
                </a>
            </div>
        );
    }
}

export default Popup;