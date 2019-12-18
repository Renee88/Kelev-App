import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faTrashAlt, faShoppingBag, faTint } from '@fortawesome/free-solid-svg-icons'

class Ameneties extends Component {

    constructor() {
        super()
        this.state = {
            ameneties: ['Bench', 'Garbage Bags', 'Ground sand', 'Dog facilities', 'Water Fountain', 'Double Gate', 'Trash cans',]
        }
    }

    generateRandomAmenity = () => {
        let randomAmeneties = []
        for (let i = 0; i < Math.floor(Math.random() * this.state.ameneties.length + 4); i++) {
            let randomAmenity = this.state.ameneties[Math.floor(Math.random() * this.state.ameneties.length)]
            if (!randomAmeneties.includes(randomAmenity)) {
                randomAmeneties.push(randomAmenity)
            }

        }
        console.log(randomAmeneties)
        return randomAmeneties
    }

    render() {
        
        return (
            <div>

                <div className="amenities-container">
                    {this.generateRandomAmenity().map((c, i) => <div className="Amenity" key={i}>{c}</div>)}
                </div>
            </div>
        );
    }
}

export default Ameneties;