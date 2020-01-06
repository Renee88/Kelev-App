import React, { Component } from 'react';
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


@inject("dogStore", "dogsStore","ownerStore")
@observer
class EditDog extends Component {
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
            dog: {}
        };

    }


    handleInput = (event) => {
        let inputName = event.target.name
        let value = event.target.value
        this.setState({ [inputName]: value })
    }
    
    toggle = async (e) => {
        let dog = this.props.dogStore.dogForEdit
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
                dog.dog_name = this.state.dog_name
                await this.props.dogStore.editDogField("dog_name", dog)
                return
            }
            
        }
        if (e.target.id === "btnDogAgeV" || e.target.id === "btnDogAgeX") {
            this.setState({
                ageDisabled: !this.state.ageDisabled,
                isAgeActive: !this.state.isAgeActive
            })
            if (e.target.id === "btnDogAgeV") {
                dog.age = this.state.age
                await this.props.dogStore.editDogField("age", dog)
                return
            }
            
        }
        if (e.target.id === "btnDogWeightV" || e.target.id === "btnDogWeightX") {
            this.setState({
                weightDisabled: !this.state.weightDisabled,
                isWeightActive: !this.state.isWeightActive
            })
            if (e.target.id === "btnDogWeightV") {
                dog.weight = this.state.weight
                await this.props.dogStore.editDogField("weight", dog)
                return
            }
           
        }
    };


    checkGender = async (e) => {
        let gender = !this.state.gender
        let dog = this.props.dogStore.dogForEdit
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
        await this.props.dogStore.editDogField("gender", dog)
        this.setState({ gender, dog, genderDisabled })
    }

    checkVaccinated = async (e) => {
        let vaccinated = !this.state.vaccinated
        await this.setState({
            vaccinated
        })

        let value = this.state.vaccinated ? 1 : 0
        this.props.dogStore.editDogField("vaccinated", this.state.dog)
    }

    checkNeutered = async (e) => {
        let neutered = !this.state.neutered
        await this.setState({
            neutered
        })
        let value = this.state.neutered ? 1 : 0
        this.props.dogStore.editDogField("neutered", this.state.dog)
    }

    async componentDidMount() {
        let dogId = this.props.match.params.dogId
        await this.props.dogStore.getDog(dogId)
        let dog = this.props.dogStore.dogForEdit
        let genderDisabled
        let gender
        let neutered
        let vaccinated

        if (dog) {
                vaccinated = dog.vaccinated
                neutered = dog.neutered

            if (dog.gender === "male") {
                genderDisabled = "mediumblue"
                gender = true
                
            } else {
                genderDisabled = "hotpink"
                gender = false

            }
        }
        this.setState({ dog, genderDisabled, gender, vaccinated, neutered })
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
        let dog = this.props.dogStore.dogForEdit
        return dog ?
            <div className="dogInputs">
                <Link to={`/dog-profiles/dog-list/${dog.owner_id}`}><div id="back-button"><i className="fas fa-chevron-left"></i></div></Link>

                <span id="dogListHeader"> Edit Dog</span>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="nameText">Edit Profile Picture</span>
                    <i className="fas fa-arrow-right"></i>
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="nameText1">Name</span>
                    <Input id="inputDogName" name="dog_name" size="large" placeholder={dog.dog_name} onChange={this.handleInput} disabled={this.state.nameDisabled} value={this.state.dog_name} />
                    {this.state.isNameActive ?
                        <div><Button id="btnDogNameV" onClick={this.toggle} type="primary">V</Button>
                            <Button id="btnDogNameX" onClick={this.toggle} type="primary">X</Button></div>
                        : <Button id="btnDogName" onClick={this.toggle} type="primary">Edit</Button>}
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="ageText">Age</span>
                    <Input id="inputDogAge" name="age" style={{ width: '70px' }} disabled={this.state.weightDisabled} onClick={this.toggle} min={0} max={20} placeholder={dog.age} onChange={this.handleInput} disabled={this.state.ageDisabled} value={this.state.age} />
                    {this.state.isAgeActive ?
                        <div><Button id="btnDogAgeV" onClick={this.toggle} type="primary">V</Button>
                            <Button id="btnDogAgeX" onClick={this.toggle} type="primary">X</Button></div>
                        : <Button id="btnDogAge" onClick={this.toggle} type="primary">Edit</Button>}

                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="weightText">Weight</span>
                    <Input id="inputDogWeight" name="weight" style={{ width: '70px' }} disabled={this.state.weightDisabled} onClick={this.toggle} min={0} max={20} placeholder={dog.weight} onChange={this.handleInput} value={this.state.weight} />
                    {this.state.isWeightActive ?
                        <div><Button id="btnDogWeightV" onClick={this.toggle} type="primary">V</Button>
                            <Button id="btnDogWeightX" onClick={this.toggle} type="primary">X</Button></div>
                        : <Button id="btnDogWeight" onClick={this.toggle} type="primary">Edit</Button>}

                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="genderText">Sex</span>
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
                        checked={this.state.vaccinatedChecked}
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                        defaultChecked
                    />
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="neuteredText">{this.state.genderDisabled == "hotpink" ? `Spayed` : "Fixed"}</span>
                    <Switch onChange={this.checkNeutered}
                        id="neutered"
                        checked={this.state.neutered}
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                        defaultChecked
                    />
                </div>

                <Divider id="divider" />

                <Link to = '/dog-profiles/dog-list'>
                <Button id="btnDeleteDog" type="primary" onClick={this.deleteDog}>Delete Dog</Button>
                </Link>
            </div>
            : null


    }

}

export default EditDog;


