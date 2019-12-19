import React, { Component } from 'react';
import { observer } from 'mobx-react';
const dogs = require("../dummyData/dogs.json")
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaw, faTimes, faTimesCircle, faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'


@observer
class DogsInPark extends Component {
    
    render() {  
        return (
            <div>

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