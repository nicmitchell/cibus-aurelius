import React from 'react';
import MenuItemGrid from './MenuItemGrid';
import dessert from '../data/dessert.js';

export default class Dessert extends React.Component {
  render() {
    return(<MenuItemGrid data={ dessert } mealType="dessert"/>);
  }
}
