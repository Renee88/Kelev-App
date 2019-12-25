import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import '../App.css';
// import '../styles/parkComponent/mainComponent.css';
import { Layout, Divider, Input, Avatar, Icon, Button, InputNumber, Switch, Form } from 'antd';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../../styles/profile/AddDog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Avatar, Icon, Button } from 'antd';
import '../../styles/profile/Profile.css'

const { Header, Footer, Sider, Content } = Layout;
// const { Checkbox } = antd;

@inject("dogStore")
@observer
class AddDog1 extends Component {

    handleInput = (event) => {
        let inputName = event.target.name
        let value = event.target.value
        this.props.dogStore.getDogInput(inputName, value)
        console.log(this.props.dogStore);
    }

    changeVaccinated = (checked) => {
        this.props.dogStore.vaccinated = checked
        console.log(this.props.dogStore);
    }

    changeNeutered = (checked) => {
        this.props.dogStore.neutered = checked
        console.log(this.props.dogStore);
    }

    changeGender = (checked) => {
        checked ? this.props.dogStore.gender = "male" : this.props.dogStore.gender = "female"
        console.log(this.props.dogStore);
    }

    render() {
        return (

            <div className="dogInputs">
                    <Link to = "/dog-profiles"><div id = "back-button"><i className="fas fa-chevron-left"></i></div></Link>
                    <span id="dogListHeader"> Add New Dog</span>

                <div className="dogNameDiv">
                    <h1>here will be a div for pic</h1>
                </div>

                <Divider id="divider" />

                <div className="dogNameDiv">
                    Dog Name: <Input id="inputDogName" name="dog_name" onChange={this.handleInput} />
                </div>

                <Divider id="divider" />

                <div className="dogNameDiv">
                    Upload Picture: <Input id="inputDogName" name="dog_picture" onChange={this.handleInput} />
                </div>

                <Divider id="divider" />

                <div className="dogNameDiv">
                    Age: <Input id="inputDogName" name="age" onChange={this.handleInput} />
                </div>

                <Divider id="divider" />

                <div className="dogNameDiv">
                    Weight: <Input id="inputDogName" name="weight" onChange={this.handleInput} />
                </div>

                <Divider id="divider" />

                <div className="dogNameDiv">
                Gender: <Switch
                        onChange={this.changeGender}
                        id = "gender_switch"
                        checkedChildren="M"
                        unCheckedChildren="F" />
                </div>

                <Divider id="divider" />

                <div className="dogNameDiv">
                Vaccinated: <Switch onChange={this.changeVaccinated}
                    checkedChildren={<Icon type="check" />}
                    unCheckedChildren={<Icon type="close" />}
                />
                </div>

                <Divider id="divider" />

                <div className="dogNameDiv">
                Neutered: <Switch onChange={this.changeNeutered}
                    checkedChildren={<Icon type="check" />}
                    unCheckedChildren={<Icon type="close" />}
                />
                </div>

                <Divider id="divider" />

                <div><Button id="btnDogName" onClick={this.props.dogStore.saveNewDog} type="primary">ADD</Button></div>

            </div>

        );
    }

}

export default AddDog1;



