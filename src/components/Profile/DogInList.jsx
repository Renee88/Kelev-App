import React, { Component } from 'react';
import { Layout, Divider, Avatar, Icon, Button } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import '../../styles/profile/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox } from 'antd';
// import { Avatar, Icon, Button } from 'antd';


const { Header, Footer, Sider, Content } = Layout;

@inject("dogStore")
@observer
class DogInList extends Component {
    constructor(){
        super()
        this.state = {
            checked: true
        }
    }

    handleChange = (e) =>{
        let checked = e.target.checked
        this.setState({checked},function(){
            console.log(this.state.checked)
        })
    }

    componentDidMount = async () =>{
        const dog = this.props.dog
        this.state.checked ? dog.dog_status = 2 : dog.dog_status = 1
        await this.props.dogStore.editDogField("dog_status",dog)
    }
 
    render() {
        const dog = this.props.dog
        const dogId =dog.dog_id
        const dogImg = dog.dog_picture
        const dogName = dog.dog_name
        console.log(dogId)

        return (
            <div className="dogLine">
                <Checkbox checked= {this.state.checked} onChange = {this.handleChange} ></Checkbox>
                <Avatar className="avatar" size={50} src= {dogImg} />
                <span id="dogName">{dogName}</span>
                <Link to={`/dog-profiles/edit-dog/${dogId}`}>
                    <i className="far fa-edit" style={{ color: "black" }}></i>
                </Link>
            </div>
    
        );
    }
}

export default DogInList;