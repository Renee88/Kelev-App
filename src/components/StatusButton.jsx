import React, { Component } from 'react';
import '../App.css';
import { Button } from 'antd'


class StatusButton extends Component {

    constructor() {
        super();
        this.state = {
            {
                "name":"Emmanuel Girard",
                "picture": "https://randomuser.me/api/portraits/thumb/men/69.jpg",
                "email":"emmanuel.girard@example.com",
                "dog": [{
                    "dog_name": "Boo",
                    "picture": "https://images.dog.ceo/breeds/pomeranian/n02112018_1556.jpg",
                    "gender": "male",
                    "age": "5",
                    "weight": "5",
                    "vaccinated": true,
                    "neutered": false
                }]
            }
        }
    }



    changeStatus = () => {

        if (this.state.status < 3) {
            let newStatus = this.state.status += 1
            this.setState({
                status: newStatus
            }, console.log(this.state.status))
        } else if (this.state.status === 3) {
            let newStatus = 1
            this.setState({
                status: newStatus
            }, console.log(this.state.status))

        }

    }



    render() {
        return (

            <div className="statusButtons">

                <div className="statusOne">
                    <Button style={{ display: (this.state.status === 1) ? true : "none" }} onClick={this.changeStatus} id="statusOne" type="primary" shape="circle"  >
                    <span id="paw1">paw</span>

                        <span>Go</span>
                    </Button>
                </div>

                <div className="statusTwo">
                    <Button style={{ display: (this.state.status === 2) ? true : "none" }} onClick={this.changeStatus} id="statusTwo" type="primary" shape="circle"  >
                        <span id="paw2">paw</span>
                        <span id="part1">I'm On</span> 
                        <span id="part2">My Way!</span>
                    </Button>
                </div>

                <div className="statusThree">
                    <Button style={{ display: (this.state.status === 3) ? true : "none" }} onClick={this.changeStatus} id="statusThree" type="primary" shape="circle"  >
                        
                        <span id="part3">At the park</span>

                    </Button>
                </div>
                </div>
        );
    }
}

export default StatusButton;
