import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("dogStore")
@observer
class NewDog extends Component {
    handleInput = (event) => {
        let inputName = event.target.name
        let value = event.target.value
        this.props.dogStore.getDogInput(inputName, value)
        console.log(this.props.dogStore);

    }


    render() {
        return (
            <div>
                <div>Dog name: <input type="text" name="dog_name" onChange={this.handleInput}></input></div>
                <div>Dog picture: <input type="text" name="dog_picture" onChange={this.handleInput}></input></div>
                <div>Gender:
                    <select name="gender" onChange={this.handleInput}>
                        <option value="" selected></option>
                        <option value="female">female</option>
                        <option value="male">male</option>
                    </select>
                </div>
                <div>Age: <input type="number" name="age" onChange={this.handleInput}></input></div>
                <div>Weight: <input type="number" name="weight" onChange={this.handleInput}></input></div>
                <div>Vaccinated:
                    <select name="vaccinated" onChange={this.handleInput}>
                        <option value="" selected></option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </div>
                <div>Neutered:
                    <select name="neutered" onChange={this.handleInput}>
                        <option value="" selected></option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </div>
                <div><button onClick={this.props.dogStore.saveNewDog}>Submit</button></div>
            </div>
        );
    }
}

export default NewDog;