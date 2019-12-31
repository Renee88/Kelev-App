import React, { Component } from 'react';
// import '../App.css';
// import '../styles/parkComponent/mainComponent.css';

import { Layout, Divider, Avatar, Icon, Button } from 'antd';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import '../../styles/profile/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox } from 'antd';
import ProfileList from './ProfileList';
import AddDog from './AddDog';
import EditDog from './EditDog';
// import { Avatar, Icon, Button } from 'antd';
// import OnBoard from './components/OnBoard';
import OnBoard from '../../components/OnBoard'


const { Header, Footer, Sider, Content } = Layout;
// const { Checkbox } = antd;

@inject("ownerStore")
class Profile extends Component {


    constructor() {
        super();
        this.state = {
            dogList: true,
            dogs: []

        }
    }

    onToggle = () => {
        let opposite = !this.state.dogList
        this.setState({
            dogList: opposite
        })
    }

    onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }

    componentDidMount = async () =>{
        const currUserId = this.props.ownerStore.currUser.id
        await this.props.ownerStore.getOwnerDogs(currUserId)
    }

    render() {
        const state = this.state;


        return (
            <div className="ProfileComponent">
                <Layout id="profileLayout" style={{ height: "100vh" }}>
                    <Header id="header" >
                    <div id="profileImgDiv">
                    </div>
                    {/* <span id="headerTitle"> Profile</span> */}
                    </Header>

                    <Content className="profileContent">

                        <Route exact path="/dog-profiles">
                            <Redirect to="/dog-profiles/dog-list/:id" />
                        </Route>
                        
                        <Route path="/dog-profiles/dog-list/:ownerId" exact render={({match}) => <ProfileList match = {match} />} />
                        <Route path="/dog-profiles/add-dog/:ownerId" exact render={({match}) => <AddDog match = {match}/>} />
                        <Route path="/dog-profiles/edit-dog/:dogId" exact render={({match}) => <EditDog match = {match}/>} />

                    </Content>
                </Layout>


            </div>

        );
    }
}

export default Profile;