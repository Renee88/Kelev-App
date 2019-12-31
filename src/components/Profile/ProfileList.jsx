import React, { Component } from 'react';
import { Layout, Divider, Avatar, Icon, Button } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import '../../styles/profile/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox } from 'antd';
import DogInList from './DogInList';
// import { Avatar, Icon, Button } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
// const { Checkbox } = antd;

@inject("ownerStore")
@observer
class ProfileList extends Component {
    constructor(){
        super()
            this.state = {
                dogsOfOwner: []
            }
        
    }
    // onChange = (e) => {
    //     console.log(`checked = ${e.target.checked}`);
    // }

    componentDidMount = async () => {
        const ownerId = this.props.match.params.ownerId
        await this.props.ownerStore.getOwnerDogs(ownerId)
        const dogsOfOwner = this.props.ownerStore.dogs
        this.setState({dogsOfOwner})
    }

    render() {
        const dogsOfOwner = this.state.dogsOfOwner
        const ownerId = this.props.match.params.ownerId
        return (
            <div>
                <Link to={`/main-profile/${ownerId}`}><div id="back-button"><i className="fas fa-chevron-left"></i></div></Link>

                <span id="dogListHeader"> My Dogs</span>

                {dogsOfOwner ? dogsOfOwner.map(d => <DogInList dog={d} />) : null}

                <Route exact to="/dog-profiles/add-dog/:id">
                    <Button id="addDog" type="primary" shape="circle" onClick={this.props.onToggle}>
                        <Link to={`/dog-profiles/add-dog/${ownerId}`}>
                            <i className="fas fa-plus" ></i>
                        </Link>
                    </Button>
                </Route>

            </div>
            );
    }
}

export default ProfileList;