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

const { Header, Footer, Sider, Content } = Layout;
// const { Checkbox } = antd;


@inject("dogStore", "dogsStore")
@observer
class EditDog extends Component {
    constructor(){
        super()
        this.state = {
            imgDisabled: true,
            nameDisabled: true,
            ageDisabled: true,
            weightDisabled: true,
            genderDisabled: "hotpink",
            vaccinatedDisabled: "close",
            neaturedDisabled: false,
            gender: null,
            vaccinated: null,
            neutered: null,
            dog: {}
        };

    }

     /* editDogField = (fieldName, dogId) => {
        axios.put('http://localhost:4000/dog-profile', {
            fieldName,
            fieldValue: this[fieldName],
            dogId
        })
    } */

    handleInput = (event) => {
        let inputName = event.target.name
        let value = event.target.value
        this.props.dogStore.getDogInput(inputName, value)
        console.log(this.props.dogStore);
    }

    toggle = (e) => {
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

    checkGender = (e) => {
        let gender = !this.state.gender
        let dogs = this.props.dogsStore.dogs
        let dogId = this.props.match.params.id
        let dog = dogs.find(i => i.id == dogId)
        
        let dogGender
        let genderDisabled

        if(gender){
            dogGender = "male"
            genderDisabled = "mediumblue"
        } else{
            dogGender = "female"
            genderDisabled = "hotpink"
        } 

        dog.gender = dogGender

        this.setState({ gender , dog, genderDisabled})
    }

    checkVaccinated = (e) => {
        let vaccinated = !this.state.vaccinated
        this.setState({
            vaccinated
        })
    }

    checkNeutered = (e) => {
        let neutered = !this.state.neutered
        this.setState({
            neutered
        })
    }

    async componentDidMount() {
        await this.props.dogsStore.loadDogs()
        let dogs = this.props.dogsStore.dogs
        let dogId = this.props.match.params.id
        let dog = dogs.find(i => i.id == dogId)
        let genderDisabled
        let gender

        if (dog) {
            if(dog.gender === "male"){
                genderDisabled = "mediumblue"
                gender = true
            } else{
                genderDisabled = "hotpink"
                gender = false
            } 
        }

        this.setState({ dog, gender , genderDisabled, vaccinated: dog.vaccinated, neutered: dog.neutered})
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
                    <Input id="inputDogName" name="dog_name" size="large" placeholder={dog.dog_name} onChange={this.handleInput} disabled={this.state.nameDisabled} />
                    <Button id="btnDogName" onClick={this.toggle} type="primary">
                        Edit
                    </Button>
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="ageText">Age</span>
                    <InputNumber id="inputDogAge" name="age" disabled={this.state.weightDisabled} onClick={this.toggle} min={0} max={20} placeholder={dog.age} onChange={this.handleInput} disabled={this.state.ageDisabled} />
                    <Button id="btnDogAge" onClick={this.toggle} type="primary">
                        Edit
                    </Button>
                </div>

                <Divider id="divider" />

                <div className="detaildiv">
                    <span id="weightText">Weight</span>
                    <InputNumber id="inputDogWeight" name="weight" disabled={this.state.weightDisabled} onClick={this.toggle} min={0} max={20} placeholder={dog.weight} onChange={this.handleInput} />
                    <Button id="btnDogWeight" onClick={this.toggle} type="primary">
                        Edit
                    </Button>
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
                    <Switch onChange={e => {this.checkNeutered(); this.props.dogStore.editDogField()}}
                        id="neutered"
                        checked={this.state.neutered}
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                        defaultChecked
                    />
                </div>
            </div>
            : null


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