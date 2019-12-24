import React, { Component } from 'react';

import { Layout, Divider, Avatar, Icon, Button } from 'antd';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import '../../styles/profile/MainProfile.css'
import ProfileList from './ProfileList';
import AddDog from './AddDog';
import EditDog from './EditDog';
// import { Avatar, Icon, Button } from 'antd';
// import OnBoard from './components/OnBoard';
import EditDog_test from '../EditDog_test';
import kelevicon from '../../pictures/profileicon.png'
import dogwalker from '../../pictures/dogwalkericon.png'
// import lycheeCover from '../../pictures/lycheecover.png'


import Profile from './Profile';
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
                        <div id="mainProfileImgDiv">
                        {/* <Link to="/"><div id="back-buttonMain"><i className="fas fa-chevron-left"></i></div></Link> */}
                        <Link to="/">
                            <Button id="backBtnReturn" type="primary"><i className="fas fa-chevron-left" id="returnBtn"></i></Button>
                            <Button id="userSettingBtn" type="primary"><i class="fas fa-user-cog" id="userSettingButon"></i></Button>
                            
                            </Link>
                        </div>
                    </Header>

                    <Content className="profileContent">

                        <hr></hr>
                        <Link to="/dog-profiles" > 
                        <div className="divLook" style={{cursor: "pointer"}}>
                            <Avatar className="profileIcons" size={35} src={kelevicon} />
                            <span className="rowText">Profile</span>
                        </div>
                        </Link>
                        <hr></hr>

                        <div className="divLook">
                            <i class="far fa-heart"></i>
                            <span className="rowText" >Favorite Dogs</span>
                            <span id="comingSoon">COMIMG SOON</span>
                        </div>

                        <hr></hr>

                        <div className="divLook">
                            <Avatar className="profileIcons" size={35} src={dogwalker} />
                            <span className="rowText" >Dog Walker</span>
                            <span id="comingSoon">COMIMG SOON</span>
                        </div>

                        <hr></hr>


                        <Route exact path="/profile">
                            <Redirect to="/main-profile" />
                        </Route>
                        <Route path="/dog-profiles/dog-list" exact render={() => <Profile />} />

                    </Content>
                </Layout>


            </div>

        );
    }
}

export default MainProfile;