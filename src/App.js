import React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';
import { PushRegistration } from '@aerogear/push';
import { ConfigurationService } from '@aerogear/core';
import './App.css';

import config from './mobile-service';

class RegisterComponent extends Component {

  state = {
    registered: false
  };

  register = () => {
    console.log('Registering...');
    new PushRegistration(new ConfigurationService(config))
      .register()
      .then(() => {
        console.log('Registered!');
        this.setState({ registered: true });
      })
      .catch(error => console.log('Failed: ', error.message, JSON.stringify(error)));
  };

  render() {
    return (
      <Button onClick={this.register} disabled={this.state.registered}>Register</Button>
    );
  }
}

function App() {
  return (
    <div className="App">
      <RegisterComponent />
    </div>
  );
}

export default App;
