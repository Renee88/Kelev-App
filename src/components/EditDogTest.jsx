import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("dogStore", "dogsStore")
@observer
class EditDogTest extends Component {

    handleInput = (event) => {
        let inputName = event.target.name
        let value = event.target.value
        this.props.dogStore.getDogInput(inputName, value)
        console.log(this.props.dogStore);
    }

    render() {
        let dogId = this.props.match.params.id
        let dogs = this.props.dogsStore.dogs
        let dog = dogs.find(i => i.id == dogId)
        dog = { ...dog }
        let dog_store = this.props.dogStore
        console.log(dog_store.dog_name);

        return (
            <div>
                <div>Name: <input name="dog_name" placeholder={dog.dog_name} onChange={this.handleInput}></input><button>Edit</button></div>
                <div>Picture: <input name="dog_picture" placeholder={dog.dog_picture} onChange={this.handleInput}></input><button>Edit</button></div>
                <div>Age: <input name="age" placeholder={dog.age} onChange={this.handleInput}></input><button>Edit</button></div>
                <div>Weight: <input name="weight" placeholder={dog.weight} onChange={this.handleInput}></input><button>Edit</button></div>
                <div>Gender: <input name="gender" placeholder={dog.gender} onChange={this.handleInput}></input></div>
                <div>Vaccinated: <input name="vaccinated" placeholder={dog.vaccinated} onChange={this.handleInput}></input></div>
                <div>Neutered: <input name="neutered" placeholder={dog.neutered} onChange={this.handleInput}></input></div>
                <div><button>Delete Dog :(</button></div>
            </div>
        )
    }
}

export default EditDogTest;