import React, { Component } from 'react';
const dogs = require("../dummyData/dogs.json")

class DogsInPark extends Component {
   
    
    render() {  
       let dog = dogs.map(d => d.picture)
       console.log(dog);
       
        return (
            <div>
               <img src={this.dog}></img>
            </div>
            
        );
    }
}

export default DogsInPark;