import React from 'react';
import {
  Box,
  Heading,
  Text
} from '@primer/components';
import './App.css';
import Routes from './Routes.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      routes: {}
    };
  }

  componentDidMount() {
    fetch('https://octokit.github.io/routes/routes/api.github.com/index.json')
      .then(data => data.json())
      .then(routes => {
        console.log(routes);
        return this.setState({ routes })
      });
  }

  render() {
    const { routes } = this.state;

    return (
      <div className="App">
          <Heading p={3}>API Endpoints</Heading>
          <Box m={3}>
            <Text bg={'green.1'}>Enabled for GitHub Apps</Text>
            {}
          </Box>
          <Routes routes={routes}></Routes>
      </div>
    );
  }
}

export default App;
