import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw ,FaBeer,FaTrashAlt} from '@fortawesome/free-solid-svg-icons'

class Ameneties extends Component {

    constructor(){
        super()
        this.state={
            ameneties = ['FaBeer','FaTrasAlt','faPaw']
        }
    }

    renderRandomIcon = () => {
        return <div><FontAwesomeIcon icon={`${this.state.ameneties[Math.floor(Math.random()* this.state.ameneties.length)]}`}/></div>
    }

    render() {
        return (
            <div>
                {this.renderRandomIcon()}
            </div>
        );
    }
}

export default Ameneties;