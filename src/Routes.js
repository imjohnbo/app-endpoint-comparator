import React from 'react';
import {
    Box,
    Heading,
    Link
  } from '@primer/components';
import { genericTypeAnnotation } from '@babel/types';

class Routes extends React.Component {
    render() {
      return (
        <div>
          {Object.keys(this.props.routes).map(route => {
            console.log(this.props.routes[route])
            return (
              <div key={route}>
                <Heading p={3}>{route}</Heading>
                {Object.keys(this.props.routes[route]).map(index => {
                  const subroute = this.props.routes[route][index];
                  return (
                    <Box 
                      key={subroute.name + Math.random()}
                      bg={subroute.enabledForApps ? 'green.1' : ''}>
                      <Link pl={6} fontSize={16} href={subroute.documentationUrl}>{subroute.name}</Link>
                    </Box>
                  )
                })}
              </div>
            )
          })}
        </div>
      );
    }
  }

  export default Routes;