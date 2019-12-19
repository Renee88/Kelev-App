import React, { Component } from 'react';
const dogs = require("../dummyData/dogs.json")

class DogsInPark extends Component {
    
    render() {  
        return (
            <div>
                <div id="spans">
                <span id="atThePark">3 at the park</span><span id="onTheWay">2 on the way</span>
                </div>
                <div id="inPark">
               {dogs.map(d => <div>
                  <img id="pic" src={d.picture}></img> 
                  <span id="name"><i class="fas fa-circle"></i>{d.dog_name} </span>
                  <span id="name">{d.dog_name} </span>
               </div> )}
            </div>
            </div>
        );
    }
}

export default DogsInPark;