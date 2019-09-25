import React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';
import { PushRegistration } from '@aerogear/push';
import { ConfigurationService } from '@aerogear/core';
import './App.css';

import config from './mobile-service';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      registered: false
    };

    PushRegistration.onMessageReceived((notification) => {
      console.log('Received a push notification', notification);
    });
  }

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

  unregister = () => {
    console.log('Unregistering...');
    new PushRegistration(new ConfigurationService(config))
      .unregister()
      .then(() => {
        console.log('Unregistered!');
        this.setState({ registered: false });
      })
      .catch(error => console.log('Failed: ', error.message, JSON.stringify(error)));
  };

  render() {
    return (
      <div className="App">
        <Button onClick={this.register} disabled={this.state.registered}>Register</Button>
        <Button onClick={this.unregister} disabled={!this.state.registered}>Unregister</Button>
      </div>
    );
  }
}

export default App;
