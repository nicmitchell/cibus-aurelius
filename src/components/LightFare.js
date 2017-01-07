import React from 'react';
import Content from './Content';
import lightFare from '../data/light-fare.js';

class LightFare extends React.Component {
  render() {
    return(<Content data={ lightFare }/>);
  }
}

export default LightFare;