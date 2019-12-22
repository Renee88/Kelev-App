import React, { Component } from 'react';
// import '../App.css';
// import '../styles/parkComponent/mainComponent.css';

import { Layout, Divider, Avatar, Icon, Button } from 'antd';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import '../../styles/profile/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox } from 'antd';
// import { Avatar, Icon, Button } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
// const { Checkbox } = antd;


class ProfileList extends Component {

    show = () => {
        alert("HEEELLLOO")
    }

    onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }

    render() {
       
        return (

            <div>


                <div className="dogLine">
                    <Checkbox checked="checked" ></Checkbox>
                    <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <span id="dogName">Dogs Name</span>
                    <i className="far fa-edit"></i>
                </div>

                <Divider id="divider" />

                <div className="dogLine">
                    <Checkbox onChange={this.onChange}></Checkbox>
                    <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <span id="dogName">Dogs Name</span>
                    <i className="far fa-edit"></i>
                </div>

                <Divider id="divider" />

                <div className="dogLine">
                    <Checkbox onChange={this.onChange}></Checkbox>
                    <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <span id="dogName">Dogs Name</span>
                    <i className="far fa-edit"></i>
                </div>

                <Divider id="divider" />

                <Link to="/profile/">
                    <Button id="addDog" type="primary" shape="circle" onClick={this.props.onToggle}>
                        <i class="fas fa-user-plus"></i>
                    </Button>
                </Link>

            </div>
        );
    }
}

export default ProfileList;