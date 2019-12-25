import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Upload, message, Layout, Divider, Input, Avatar, Icon, Button, InputNumber, Switch, Form } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../../styles/profile/AddDog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { Header, Footer, Sider, Content } = Layout;
// const { Checkbox } = antd;

@inject("dogStore")
@observer
class AddDog extends Component {

    state = {
        genderDisabled: "hotpink"

    }

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
        if (this.state.genderDisabled == "hotpink") {
            this.setState({
                genderDisabled: "mediumblue"
            })
        }
        if (this.state.genderDisabled == "mediumblue") {
            this.setState({
                genderDisabled: "hotpink"
            })
        }
        checked ? this.props.dogStore.gender = "male" : this.props.dogStore.gender = "female"
        console.log(this.props.dogStore)
    }

    render() {

        let state = this.state

        return (

            <div className="dogInputs">
                <Link to="/dog-profiles"><div id="back-button"><i className="fas fa-chevron-left"></i></div></Link>
                <span id="dogListHeader"> Add New Dog</span>
                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="imgText">Add Profile Picture</span>
                    <Upload >
                        <Button id="uploadBtn">
                            <Icon type="upload" />Upload
                        </Button>
                    </Upload>
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="nameText">Name</span>
                    <Input id="inputDogName" name="dog_name" onChange={this.handleInput} />
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="ageText">Age</span>
                    {/* <InputNumber id="inputDogAge"  name="age" onChange={this.handleInput} /> */}

                    <Input id="inputDogName" name="age" onChange={this.handleInput} />
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="weightText">Weight</span>
                    {/* <InputNumber id="inputDogWeight"onChange={this.handleInput} /> */}

                    <Input id="inputDogName" name="weight" onChange={this.handleInput} />
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="genderText">Sex</span>
                    <Switch
                        onChange={this.changeGender}
                        style={{ backgroundColor: state.genderDisabled }}
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
                    />
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="neuteredText">{state.genderDisabled == "hotpink" ? `Spayed` : "Fixed"}</span>
                    <Switch onChange={this.changeNeutered}
                        id="neutered"
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                    />
                </div>

                <Divider id="divider" />
                <div className="addDogButtons">
                    <Button id="btnAddDog" onClick={this.props.dogStore.saveNewDog} type="primary">Add</Button>
                    <Link to="/dog-profiles/dog-list">
                        <Button id="btnCancelDog" type="primary">Cancel</Button>
                    </Link>
                </div>
            </div>

        );
    }

}

export default AddDog;



