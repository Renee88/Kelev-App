import React, { Component } from 'react';
import { Layout, Divider, Avatar, Icon, Button } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import '../../styles/profile/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox } from 'antd';
// import { Avatar, Icon, Button } from 'antd';
import dogImg from '../../pictures/loyee.jpg'
import soyaImg from '../../pictures/soya.jpg'
import lycheeImg from '../../pictures/lycheecover.jpg'

const { Header, Footer, Sider, Content } = Layout;
// const { Checkbox } = antd;


class DogInList extends Component {

 
    render() {

        return (
                <div>

            <div className="dogLine">
                <Checkbox checked="checked" ></Checkbox>
                <Avatar className="avatar" size={50} src={dogImg} />
                <span id="dogName">Louie</span>
                <Link to="/dog-profiles/edit-dog">
                    <i className="far fa-edit" style={{ color: "black" }}></i>
                </Link>
            </div>


             <div className="dogLine">
                <Checkbox></Checkbox>
                <Avatar className="avatar" size={50} src={lycheeImg} />
                <span id="dogName">Lychee</span>
                <Link to="/dog-profiles/edit-dog">
                    <i className="far fa-edit" style={{ color: "black" }}></i>
                </Link>
            </div>


            <div className="dogLine">
                <Checkbox></Checkbox>
                <Avatar className="avatar" size={50} src={soyaImg} />
                <span id="dogName">Soya</span>
                <Link to="/dog-profiles/edit-dog">
                    <i className="far fa-edit" style={{ color: "black" }}></i>
                </Link>
            </div>


            </div> 
    
        );
    }
}

export default DogInList;