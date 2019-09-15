import React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';
import { PushRegistration } from 'AeroGearServicesWeb/packages/push/dist/PushRegistration'
import { ConfigurationService } from '@aerogear/core';
import './App.css';

const config = {
  "version": 1,
  "namespace": "testapp",
  "clientId": "test-app-example",
  "services": [
    {
      "config": {
        "web_push": {
          "appServerKey": "BIk8YK3iWC3BfMt3GLEghzY4v5GwaZsTWKxDKm-FZry3Nx2E_q-4VW3501DkQ5TX1Pe7c3yIsajUk9hQAo3sT-0",
          "variantId": "F85A9650-1FC1-4240-A6D6-D8E1052598D8",
          variantSecret: "E37A1C22-046A-4DC4-AFBD-B4A745F466D1",
        }
      },
      "id": "1d6f06f6-d476-11e9-aea8-121754e23732",
      "name": "push",
      "type": "push",
      "url": "http://localhost:9999"
    }
  ]
}

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
