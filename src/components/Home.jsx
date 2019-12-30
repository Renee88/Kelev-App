import React, { Component } from 'react';
import Map from './Map'
import StatusButton from './StatusButton';
import HeaderButtons from './headerButtons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {


    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
            <Map />
            <StatusButton />
            <HeaderButtons id = {this.props.match.params.id} />
            </div>

        )
    }
}

export default Home;