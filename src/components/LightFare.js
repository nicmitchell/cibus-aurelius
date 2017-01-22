import React from 'react';
import MenuItemGrid from './MenuItemGrid';
import lightFare from '../data/light-fare.js';

export default class LightFare extends React.Component {
  render() {
    return(<MenuItemGrid data={ lightFare } mealType="light"/>);
  }
}
