import React, { Component } from 'react';
// import '../App.css';
// import '../styles/parkComponent/mainComponent.css';

import { Layout, Divider, Input, Avatar, Icon, Button, Switch, InputNumber } from 'antd';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import '../../styles/profile/EditDog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Avatar, Icon, Button } from 'antd';
import '../../styles/profile/Profile.css'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';



const { Header, Footer, Sider, Content } = Layout;
// const { Checkbox } = antd;


class EditDog extends Component {
    state = {
        imgDisabled: false,
        nameDisabled: false,
        ageDisabled: false,
        weightDisabled: false,
        genderDisabled: false,
        vaccinatedDisabled: false,
        neaturedDisabled: false
    };


    toggle = (e) => {
        console.log(e.target.id)
        if (e.target.id === "btnDogName") {
            this.setState({
                nameDisabled: !this.state.nameDisabled
            })
        }
        if (e.target.id === "btnDogAge") {
            this.setState({
                ageDisabled: !this.state.ageDisabled
            })
        }
        if (e.target.id === "btnDogWeight") {
            this.setState({
                weightDisabled: !this.state.weightDisabled
            })
        }
        if (e.target.id === "btnDogName") {
            this.setState({
                nameDisabled: !this.state.nameDisabled
            })
        }

    };

    render() {
        return (

            <div className="dogInputs">

                <div className="dogNameDiv">
                    <h1>here will be a div for pic</h1>
                </div>

                <Divider id="divider" />

                <div className="dogNameDiv">
                    <Input id="inputDogName" size="large" placeholder="Dogs Name" disabled={this.state.nameDisabled} />
                    <Button id="btnDogName" onClick={this.toggle} type="primary">
                        Edit
                    </Button>
                </div>

                <Divider id="divider" />

                <div className="dogNameDiv">
                    <Input id="inputDogName" size="large" placeholder="Age" disabled={this.state.ageDisabled} />
                    <Button id="btnDogAge" onClick={this.toggle} type="primary">
                        Edit
                    </Button>
                </div>

                <Divider id="divider" />

                <div className="dogNameDiv">
                    <Input id="inputDogName" size="large" placeholder="Weight" disabled={this.state.weightDisabled} />
                    <Button id="btnDogWeight" onClick={this.toggle} type="primary">
                        Edit
                    </Button>
                </div>

                <Divider id="divider" />

                <div className="dogNameDiv">
                        <span id="genderText">Gender</span> 
                        <Switch
                            onChange={this.changeGender}
                            // style = {{backgroundColor: "pink"}}
                            id="gender_switch"
                            checkedChildren="M"
                            unCheckedChildren="F" />
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

export default EditDog;





// <div className="dogNameDiv">
//     Gender: <Switch
//         onChange={this.changeGender}
//         // style = {{backgroundColor: "pink"}}
//         id="gender_switch"
//         checkedChildren="M"
//         unCheckedChildren="F" />
// </div>

//     <Divider id="divider" />

//     <div className="dogNameDiv">
//         Vaccinated: <Switch onChange={this.changeVaccinated}
//             checkedChildren={<Icon type="check" />}
//             unCheckedChildren={<Icon type="close" />}
//             defaultChecked
//         />
//     </div>

//     <Divider id="divider" />

//     <div className="dogNameDiv">
//         Neutered: <Switch onChange={this.changeNeutered}
//             checkedChildren={<Icon type="check" />}
//             unCheckedChildren={<Icon type="close" />}
//             defaultChecked
//         />
//     </div>