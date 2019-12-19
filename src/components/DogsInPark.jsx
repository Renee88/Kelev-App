import React, { Component } from 'react';
const dogs = require("../dummyData/dogs.json")

class DogsInPark extends Component {
    
    render() {  
        return (
            <div>
                <div id="spans">
                <span id="atThePark">4 at the park</span><span id="onTheWay">6 on the way</span>
                </div>
                <div id="inPark">
               {dogs.map(d => <div>
                  <img id="pic" src={d.picture}></img> 
                  <span id="name"><i className={d.status ? "fas fa-circle" : "far fa-circle"}></i>{d.dog_name}</span><br></br>
                  <span id="minsAway"> <i id="clock" className={d.away ? "far fa-clock" : null}></i> {d.away ? `${d.away} mins away` : null}</span>
               </div> )}
            </div>
            </div>
        );
    }
}

export default DogsInPark;