import React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';
import { PushRegistration } from '@aerogear/push'
import { ConfigurationService } from '@aerogear/core';
import './App.css';

import config from './mobile-service';

class TestComponent extends Component {
  register() {
    console.log('Registering...12');
    const reg = new PushRegistration(new ConfigurationService(config));
    reg.register()
      .then(() => console.log('registered'))
      .catch(error =>
        console.log('Failed: ', error.message, JSON.stringify(error)));
  }

  render() {
    return (
    <Button onClick={this.register}>Click me please</Button>
    );
  }
}


function App() {
  return (
    <div className="App">
      <TestComponent />
    </div>
  );
}

export default App;
