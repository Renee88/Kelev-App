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
            dog_name: '',
            checked: null,
            dog: {}
        };

    }



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

    checkHandler = (e) => {
        let checked = !this.state.checked
        let dogs = this.props.dogsStore.dogs
        let dogId = this.props.match.params.id
        let dog = dogs.find(i => i.id == dogId)
        
        let dogGender
        let genderDisabled

        if(checked){
            dogGender = "male"
            genderDisabled = "mediumblue"
        } else{
            dogGender = "female"
            genderDisabled = "hotpink"
        } 

        dog.gender = dogGender

        this.setState({ checked , dog, genderDisabled})
    }

    async componentDidMount() {
        await this.props.dogsStore.loadDogs()
        let dogs = this.props.dogsStore.dogs
        let dogId = this.props.match.params.id
        let dog = dogs.find(i => i.id == dogId)
        let genderDisabled
        let checked
        
        if (dog) {
            if(dog.gender === "male"){
                genderDisabled = "mediumblue"
                checked = true
            } else{
                genderDisabled = "hotpink"
                checked = false
            } 
        }

        this.setState({ dog, checked , genderDisabled})
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
                        onChange={this.checkHandler}
                        style={{ backgroundColor: this.state.genderDisabled }}
                        id="gender_switch"
                        checked={this.state.checked}
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