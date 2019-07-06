import React from 'react';
import {
  Box,
  Button,
  Heading,
  Details,
  Text
} from '@primer/components';
import './App.css';
import routes from './routes.json';

class App extends React.Component {
  getList() {
    // return Object.keys(routes)
    //   .forEach(route => routes[route]
    //     .map(endpoint => <p>{endpoint}</p>));
    return routes;
  }

  render() {
    return (
      <div className="App">
          <Heading p={3}>API Endpoints</Heading>
          {console.log(routes)}
          <Details p={3}>
            <h3 as="summary" p={3}>route.header</h3>
            <p>This will show and hide</p>
          </Details>
      </div>
    );
  }
}

export default App;
