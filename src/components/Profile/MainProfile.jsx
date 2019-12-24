import React, { Component } from 'react';

import { Layout, Divider, Avatar, Icon, Button } from 'antd';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import '../../styles/profile/Profile.css'
import ProfileList from './ProfileList';
import AddDog from './AddDog';
import EditDog from './EditDog';
// import { Avatar, Icon, Button } from 'antd';
// import OnBoard from './components/OnBoard';
import EditDog_test from '../EditDog_test';
const { Header, Footer, Sider, Content } = Layout;


class MainProfile extends Component {

    // onToggle = () => {
    //     let opposite = !this.state.dogList
    //     this.setState({
    //         dogList: opposite
    //     })
    // }

    // onChange = (e) => {
    //     console.log(`checked = ${e.target.checked}`);
    // }

    render() {
        const state = this.state;


        return (
            <div className="MainPageComponent">
                <Layout id="mainProfileLayout" style={{ height: "100vh" }}>
                    <Header id="header" >
                    <div id="profileImgDiv">
                    </div>
                    {/* <span id="headerTitle"> Profile</span> */}
                    </Header>

                    <Content className="profileContent">

                        <div> hello</div>

                        <Route exact path="/dog-profiles">
                            <Redirect to="/dog-profiles/dog-list" />
                        </Route>
                        
                        <Route path="/dog-profiles/dog-list" exact render={() => <ProfileList />} />
                        <Route path="/dog-profiles/add-dog" exact render={() => <AddDog />} />
                        <Route path="/dog-profiles/edit-dog" exact render={() => <EditDog />} />
                        <Route path="/dog-profiles/editdog" exact render={() => <EditDog_test />} />

                    </Content>
                </Layout>


            </div>

        );
    }
}

export default MainProfile;