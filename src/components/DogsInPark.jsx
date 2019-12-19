import React, { Component } from 'react';
const dogs = require("../dummyData/dogs.json")
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaw, faTimes, faTimesCircle, faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'


class DogsInPark extends Component {
    
    render() {  
        return (
            <div>

                <div id="inPark">
               {dogs.map(d => <div>
                  <img id="pic" src={d.picture}></img> 
                  <span id="name"><i className="far fa-circle"></i>{d.dog_name} </span>
                  <span id="timeToArrive">{d.dog_s} </span>
               </div> )}
            </div>
            </div>
        );
    }
}

export default DogsInPark;