import React from 'react';
import MenuItemGrid from './MenuItemGrid';
import lightFare from '../data/light-fare.js';

class LightFare extends React.Component {
  render() {
    return(<MenuItemGrid data={ lightFare }/>);
  }
}

export default LightFare;