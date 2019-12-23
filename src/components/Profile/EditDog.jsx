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
        imgDisabled: true,
        nameDisabled: true,
        ageDisabled: true,
        weightDisabled: true,
        genderDisabled: "hotpink",
        vaccinatedDisabled: "close",
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

    colorChanger = () => { 
        if(this.state.genderDisabled == "hotpink"){
            this.setState({
                genderDisabled : "mediumblue"
            }) }
            if (this.state.genderDisabled == "mediumblue"){
                this.setState({
                    genderDisabled : "hotpink"
                })
            }
        
    }

    render() {

        let state = this.state

        return (

            
            <div className="dogInputs">
                <Link to = "/dog-profiles/dog-list"><div id = "back-button"><i className="fas fa-chevron-left"></i></div></Link>

                <Divider id="divider" />

                <div className="detaildiv">
                    <h1 style={{ paddingLeft: "10px" }} >Edit Profile Picture</h1>
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                <span id="nameText">Name</span>

                    <Input id="inputDogName" size="large" placeholder="Lychee" disabled={this.state.nameDisabled} />
                    <Button id="btnDogName" onClick={this.toggle} type="primary">
                        Edit
                    </Button>
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                <span id="ageText">Age</span>

                    <Input id="inputDogAge" size="large" placeholder="6 years" disabled={this.state.ageDisabled} />
                    <Button id="btnDogAge" onClick={this.toggle} type="primary">
                        Edit
                    </Button>
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                <span id="weightText">Weight</span>

                    <Input id="inputDogWeight" size="large" placeholder="10 kg" disabled={this.state.weightDisabled} />
                    <Button id="btnDogWeight" onClick={this.toggle} type="primary">
                        Edit
                    </Button>
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="genderText">Gender</span>
                    <Switch
                        onChange={this.colorChanger}
                        style =  {{backgroundColor: state.genderDisabled }}
                        id="gender_switch"
                        checkedChildren="M"
                        unCheckedChildren="F" />
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="vaccinatedText">Vaccinated</span>
                    <Switch onChange={this.changeVaccinated}
                        id="vaccinated"
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                        defaultChecked
                    />
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="neuteredText">Neutered</span>
                    <Switch onChange={this.changeVaccinated}
                        id="neutered"
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                        defaultChecked
                    />
                </div>



            </div>

        );
    }

}

export default EditDog;





//     <Divider id="divider" />

//     <div className="dogNameDiv">

//     </div>

//     <Divider id="divider" />

//     <div className="dogNameDiv">
//         Neutered: <Switch onChange={this.changeNeutered}
//             checkedChildren={<Icon type="check" />}
//             unCheckedChildren={<Icon type="close" />}
//             defaultChecked
//         />
//     </div>