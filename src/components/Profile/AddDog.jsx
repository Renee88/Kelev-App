import React, { Component } from 'react';
// import '../App.css';
// import '../styles/parkComponent/mainComponent.css';

import { Layout, Divider, Avatar, Icon, Button , InputNumber } from 'antd';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import '../../styles/profile/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox } from 'antd';
// import { Avatar, Icon, Button } from 'antd';
import '../../styles/profile/Profile.css'



const { Header, Footer, Sider, Content } = Layout;
// const { Checkbox } = antd;


class AddDog extends Component {
    state = {
        disabled: true,
      };
    
      toggle = () => {
        this.setState({
          disabled: !this.state.disabled,
        });
      };
    
      render() {
        return (
          <div>
            <InputNumber min={1} max={10} disabled={this.state.disabled} defaultValue={3} />
            <div style={{ marginTop: 20 }}>
              <Button onClick={this.toggle} type="primary">
                Toggle disabled
              </Button>
            </div>
          </div>
        );
      }
    
}

export default AddDog;