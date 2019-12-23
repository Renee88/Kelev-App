import React, { Component } from 'react';
// import '../App.css';
// import '../styles/parkComponent/mainComponent.css';

import { Layout, Divider, Input, Avatar, Icon, Button, Switch, InputNumber } from 'antd';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import '../../styles/profile/AddDog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Avatar, Icon, Button } from 'antd';
import '../../styles/profile/Profile.css'



const { Header, Footer, Sider, Content } = Layout;
// const { Checkbox } = antd;


class AddDog extends Component {
    state = {
        disabled: true,
    };

    toggle = () => {
        this.setState({
            disabled: !this.state.disabled,
        });
    };

    render() {
        return (

            <div className="dogInputs">

                <div className="dogNameDiv">
                    <h1>here will be a div for pic</h1>
                </div>

                <Divider id="divider" />

                <div className="dogNameDiv">
                    <Input id="inputDogName" size="large" placeholder="Dogs Name" disabled={this.state.disabled} />
                    <Button id="btnDogName" onClick={this.toggle} type="primary">
                        Edit
                    </Button>
                </div>

                <Divider id="divider" />

                <div className="dogNameDiv">
                    <Input id="inputDogName" size="large" placeholder="Age" disabled={this.state.disabled} />
                    <Button id="btnDogName" onClick={this.toggle} type="primary">
                        Edit
                    </Button>
                </div>

                <Divider id="divider" />

                <div className="dogNameDiv">
                    <Input id="inputDogName" size="large" placeholder="Dogs Name" disabled={this.state.disabled} />
                    <Button id="btnDogName" onClick={this.toggle} type="primary">
                        Gender
                    </Button>
                </div>

                <Divider id="divider" />

                <div className="dogNameDiv">
                    <h1>here will be the Id of the dog</h1>
                </div>

                <Divider id="divider" />

                <div className="dogNameDiv">
                    {/* <Input id="inputDogName" size="large" placeholder="Dogs Name" disabled={this.state.disabled} /> */}
                    <Button id="btnDogName" onClick={this.toggle} type="primary">
                        DELETE
                    </Button>
                </div>

            </div>

        );
    }

}

export default AddDog;



