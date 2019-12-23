import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import axios from 'axios';

@inject("dogStore")
@observer
class EditDog extends Component {
    constructor(){
        super()
        this.state = {
                dog_name: "Leo",
                dog_picture: "https://images.dog.ceo/breeds/chow/n02112137_7645.jpg",
                gender: "male",
                age: 1,
                weight: 20,
                vaccinated: 1,
                neutered: 1
        }
    }
    render(){
       let store = this.props.DogStore
        return(
        <div>
            <div>Name: <input value = {this.state.dog_name} onChange={store.getDogInput}></input><button onClick={store.editDogField}>Save</button></div>
            <div>Picture: <input value = {this.state.dog_picture} onChange={store.getDogInput}></input><button>Save</button></div>
            <div>Gender: <input value = {this.state.gender} onChange={store.getDogInput}></input><button>Save</button></div>
            <div>Age: <input value = {this.state.age} onChange={store.getDogInput}></input><button>Save</button></div>
            <div>Weight: <input value = {this.state.weight} onChange={store.getDogInput}></input><button>Save</button></div>
            <div>Vaccinated: <input value = {this.state.vaccinated} onChange={store.getDogInput}></input><button>Save</button></div>
            <div>Neutered: <input value = {this.state.neutered} onChange={store.getDogInput}></input><button>Save</button></div>
        </div>
        )
    }
}

export default EditDog;