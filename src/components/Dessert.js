import React from 'react';
import MenuItemGrid from './MenuItemGrid';
import dessert from '../data/dessert.js';

class Dessert extends React.Component {
  render() {
    return(<MenuItemGrid data={ dessert } mealType="dessert"/>);
  }
}

export default Dessert;