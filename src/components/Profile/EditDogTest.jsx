import React, { Component } from 'react';
// import '../App.css';
// import '../styles/parkComponent/mainComponent.css';

import { Layout, Divider, Input, Avatar, Icon, InputNumber, Button, Switch } from 'antd';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import '../../styles/profile/EditDog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Avatar, Icon, Button } from 'antd';
import '../../styles/profile/Profile.css'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const { Header, Footer, Sider, Content } = Layout;
// const { Checkbox } = antd;


@inject("dogStore", "dogsStore")
@observer
class EditDogTest extends Component {
    constructor() {
        super()
        this.state = {
            imgDisabled: true,
            nameDisabled: true,
            ageDisabled: true,
            weightDisabled: true,
            genderDisabled: "hotpink",
            vaccinatedDisabled: "close",
            neaturedDisabled: false,
            isNameActive: false,
            isAgeActive: false,
            isWeightActive: false,
            dog_name: null,
            age: null,
            weight: null,
            gender: null,
            vaccinated: null,
            neutered: null,
            owner_id: 5,
            dog: {}
        };

    }

    editDogField = (dogId, fieldName, fieldValue) => {
        axios.put('http://localhost:4000/dog-profile', {
            fieldName,
            fieldValue,
            dogId
        })
    }

    handleInput = async (event) => {
        let inputName = event.target.name
        let value = event.target.value
        await this.setState({ [inputName]: value })
    }

    toggle = (e) => {
        if (e.target.id === "btnDogName") {
            this.setState({
                nameDisabled: !this.state.nameDisabled,
                isNameActive: !this.state.isNameActive
            })
        }
        if (e.target.id === "btnDogAge") {
            this.setState({
                ageDisabled: !this.state.ageDisabled,
                isAgeActive: !this.state.isAgeActive
            })
        }
        if (e.target.id === "btnDogWeight") {
            this.setState({
                weightDisabled: !this.state.weightDisabled,
                isWeightActive: !this.state.isWeightActive
            })
        }
        if (e.target.id === "btnDogNameV" || e.target.id === "btnDogNameX") {
            this.setState({
                nameDisabled: !this.state.nameDisabled,
                isNameActive: !this.state.isNameActive
            })
            if (e.target.id === "btnDogNameV") {
                this.editDogField(this.state.dog.id, "dog_name", this.state.dog_name)
            }
            if (e.target.id === "btnDogNameX") {
                this.setState({
                    dog_name: ""
                })
            }
        }
        if (e.target.id === "btnDogAgeV" || e.target.id === "btnDogAgeX") {
            this.setState({
                ageDisabled: !this.state.ageDisabled,
                isAgeActive: !this.state.isAgeActive
            })
            if (e.target.id === "btnDogAgeV") {
                this.editDogField(this.state.dog.id, "age", this.state.age)
            }
            if (e.target.id === "btnDogAgeX") {
                this.setState({
                    age: ""
                })
            }
        }
        if (e.target.id === "btnDogWeightV" || e.target.id === "btnDogWeightX") {
            this.setState({
                weightDisabled: !this.state.weightDisabled,
                isWeightActive: !this.state.isWeightActive
            })
            if (e.target.id === "btnDogWeightV") {
                this.editDogField(this.state.dog.id, "weight", this.state.weight)
            }
            if (e.target.id === "btnDogWeightX") {
                this.setState({
                    weight: ""
                })
            }
        }
    };

    checkGender = async (e) => {
        let gender = !this.state.gender
        let dogs = this.props.dogsStore.dogs
        let dogId = this.props.match.params.id
        let dog = dogs.find(i => i.id == dogId)

        let dogGender
        let genderDisabled

        if (gender) {
            dogGender = "male"
            genderDisabled = "mediumblue"
        } else {
            dogGender = "female"
            genderDisabled = "hotpink"
        }

        dog.gender = dogGender

        await this.setState({ gender, dog, genderDisabled })
        let value = this.state.gender ? "male" : "female"
        console.log(this.state.dog.id, "gender", value);

        this.editDogField(this.state.dog.id, "gender", value)
    }

    checkVaccinated = async (e) => {
        let vaccinated = !this.state.vaccinated
        await this.setState({
            vaccinated
        })

        let value = this.state.vaccinated ? 1 : 0
        this.editDogField(this.state.dog.id, "vaccinated", value)
    }

    checkNeutered = async (e) => {
        let neutered = !this.state.neutered
        await this.setState({
            neutered
        })
        let value = this.state.neutered ? 1 : 0
        console.log(this.state.dog.id, "neutered", value);

        this.editDogField(this.state.dog.id, "neutered", value)
    }

    async componentDidMount() {
        await this.props.dogsStore.loadDogs()
        let dogs = this.props.dogsStore.dogs
        let dogId = this.props.match.params.id
        let dog = dogs.find(i => i.id == dogId)
        let genderDisabled
        let gender

        if (dog) {
            if (dog.gender === "male") {
                genderDisabled = "mediumblue"
                gender = true
            } else {
                genderDisabled = "hotpink"
                gender = false
            }
        }

        this.setState({ dog, gender, genderDisabled, vaccinated: dog.vaccinated, neutered: dog.neutered })
    }

    deleteDog = () => {
        axios.delete('http://localhost:4000/dog-profile', {
            data:
            {
                id: this.state.dog.id,
                owner_id: this.state.owner_id
            }
        }
        )
    }


    render() {

        let dogId = this.props.match.params.id
        let dogs = this.props.dogsStore.dogs
        let dog = dogs.find(i => i.id == dogId)

        return dog ?
            <div className="dogInputs">
                <Link to="/dog-profiles/dog-list"><div id="back-button"><i className="fas fa-chevron-left"></i></div></Link>

                <span id="dogListHeader"> Edit Dog</span>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="nameText">Edit Profile Picture</span>
                    <i className="fas fa-arrow-right"></i>
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="nameText">Name</span>
                    <Input id="inputDogName" name="dog_name" size="large" placeholder={dog.dog_name} onChange={this.handleInput} disabled={this.state.nameDisabled} value={this.state.dog_name} />
                    {this.state.isNameActive ?
                        <div><Button id="btnDogNameV" onClick={this.toggle} type="primary">V</Button>
                            <Button id="btnDogNameX" onClick={this.toggle} type="primary">X</Button></div>
                        : <Button id="btnDogName" onClick={this.toggle} type="primary">Edit</Button>}
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="ageText">Age</span>
                    <Input id="inputDogAge" name="age" disabled={this.state.weightDisabled} onClick={this.toggle} min={0} max={20} placeholder={dog.age} onChange={this.handleInput} disabled={this.state.ageDisabled} value={this.state.age} />
                    {this.state.isAgeActive ?
                        <div><Button id="btnDogAgeV" onClick={this.toggle} type="primary">V</Button>
                            <Button id="btnDogAgeX" onClick={this.toggle} type="primary">X</Button></div>
                        : <Button id="btnDogAge" onClick={this.toggle} type="primary">Edit</Button>}

                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="weightText">Weight</span>
                    <Input id="inputDogWeight" name="weight" disabled={this.state.weightDisabled} onClick={this.toggle} min={0} max={20} placeholder={dog.weight} onChange={this.handleInput} value={this.state.weight} />
                    {this.state.isWeightActive ?
                        <div><Button id="btnDogWeightV" onClick={this.toggle} type="primary">V</Button>
                            <Button id="btnDogWeightX" onClick={this.toggle} type="primary">X</Button></div>
                        : <Button id="btnDogWeight" onClick={this.toggle} type="primary">Edit</Button>}

                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="genderText">Gender</span>
                    <Switch
                        onChange={this.checkGender}
                        style={{ backgroundColor: this.state.genderDisabled }}
                        id="gender_switch"
                        checked={this.state.gender}
                        checkedChildren="M"
                        unCheckedChildren="F" />
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="vaccinatedText">Vaccinated</span>
                    <Switch onChange={this.checkVaccinated}
                        id="vaccinated"
                        checked={this.state.vaccinated}
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                        defaultChecked
                    />
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="neuteredText">Neutered</span>
                    <Switch onChange={this.checkNeutered}
                        id="neutered"
                        checked={this.state.neutered}
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                        defaultChecked
                    />
                </div>
                <Link to = '/dog-profiles/dog-list'>
                <button onClick={this.deleteDog}>Delete</button>
                </Link>
            </div>
            : null


    }

}

export default EditDogTest;


