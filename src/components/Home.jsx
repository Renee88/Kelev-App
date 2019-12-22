import React, { Component } from 'react';
import Map from './Map'
import StatusButton from './StatusButton';
import ReCenterButton from './reCenterButton';
import HeaderButtons from './headerButtons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {


    render() {

        return (
            <div>
            <Map />
            <StatusButton />
            <HeaderButtons />
            <ReCenterButton />
            </div>

        )
    }
}

export default Home;