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

    // onChange = (e) => {
    //     console.log(`checked = ${e.target.checked}`);
    // }

    async componentDidMount(){
        const id = this.props.match.params.id
        await this.props.ownerStore.getOwnerDogs(id)
        console.log(this.props.ownerStore.dogs)
    }

    render() {
        const dogsOfOwner = this.props.ownerStore.dogs
        console.log(this.props.match)
        const id = this.props.match.params.id
        return (
            
            <div>
                <Link to={`/main-profile/${id}`}><div id="back-button"><i className="fas fa-chevron-left"></i></div></Link>

                <span id="dogListHeader"> My Dogs</span>


                {dogsOfOwner.length ? dogsOfOwner.map(d => <DogInList dog = {d} />) :null}

                <Route to="/dog-profiles/add-dog">
                    <Button id="addDog" type="primary" shape="circle" onClick={this.props.onToggle}>
                        <Link to={`/dog-profiles/add-dog/${id}`}>
                        <i className="fas fa-plus" ></i>
                        </Link>
                    </Button>
                </Route>

            </div>
            
        );
    }
}

export default ProfileList;