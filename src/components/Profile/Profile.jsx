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
// import { Avatar, Icon, Button } from 'antd';
// import OnBoard from './components/OnBoard';
import OnBoard from '../../components/OnBoard'
import EditDog_test from '../EditDog_test';

const { Header, Footer, Sider, Content } = Layout;
// const { Checkbox } = antd;


class Profile extends Component {


    constructor() {
        super();
        this.state = {

            dogList: true

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

    render() {
        const state = this.state;


        return (
            <div className="ProfileComponent">
                <Layout id="profileLayout" style={{ height: "100vh" }}>
                    <Header id="header" >
                        <span id="headerTitle">this is a main component</span>
                    </Header>

                    <Content className="profileContent">

                        <Route exact path="/dog-profiles">
                            <Redirect to="/dog-profiles/dog-list" />
                        </Route>
                        
                        <Route path="/dog-profiles/dog-list" exact render={() => <ProfileList />} />
                        <Route path="/dog-profiles/add-dog" exact render={() => <AddDog />} />
                        <Route path="/dog-profiles/editdog" exact render={() => <EditDog_test />} />

                    </Content>
                </Layout>


            </div>

        );
    }
}

export default Profile;