import React, { Component } from 'react';
import Map from './Map'
import StatusButton from './StatusButton';
import HeaderButtons from './headerButtons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {


    render() {
        console.log(this.props.match.params.ownerId)
        return (
            <div>
            <Map />
            <StatusButton ownerId = {this.props.match.params.ownerId}/>
            <HeaderButtons ownerId = {this.props.match.params.ownerId} />
            </div>

        )
    }
}

export default Home;