import React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';
import { PushRegistration } from '@aerogear/push';
import { ConfigurationService } from '@aerogear/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      const notificationObject = JSON.parse(notification);
      toast.info(`${notificationObject.alert}`);
    });
  }

  register = () => {
    console.log('Registering...');
    new PushRegistration(new ConfigurationService(config))
      .register({serviceWorker: 'aerogear-sw.js'})
      .then(() => {
        console.log('Registered!');
        this.setState({ registered: true });
      })
      .catch(error => {
        toast.error(`Failed: ${error.message}`);
        console.log('Failed: ', error.message, JSON.stringify(error))
      });
  };

  unregister = () => {
    console.log('Unregistering...');
    new PushRegistration(new ConfigurationService(config))
      .unregister()
      .then(() => {
        console.log('Unregistered!');
        this.setState({ registered: false });
      })
      .catch(error => {
        toast.error(`Failed: ${error.message}`);
        console.log('Failed: ', error.message, JSON.stringify(error))
      });
  };

  render() {
    return (
      <div className="App">
        <ToastContainer />
        <Button onClick={this.register} disabled={this.state.registered}>Register</Button>
        <Button onClick={this.unregister} disabled={!this.state.registered}>Unregister</Button>
      </div>
    );
  }
}

export default App;
