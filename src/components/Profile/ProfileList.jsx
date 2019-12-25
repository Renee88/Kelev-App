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


class ProfileList extends Component {

    onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }

    render() {

        return (

            <div>
                <Link to="/main-profile"><div id="back-button"><i className="fas fa-chevron-left"></i></div></Link>

                <span id="dogListHeader"> My Dogs</span>


                    <DogInList />

                <Link to="/dog-profiles/add-dog">
                    <Button id="addDog" type="primary" shape="circle" onClick={this.props.onToggle}>
                        <Link to="/dog-profiles/add-dog">
                        {/* <i class="fas fa-dog" style={{ color: "black" }}></i> */}
                        <i className="fas fa-plus" ></i>
                            {/* <i class="fas fa-user-plus" style={{ color: "black" }}></i> */}
                        </Link>
                    </Button>
                </Link>

            </div>
        );
    }
}

export default ProfileList;