import React from 'react';
import MenuItemGrid from './MenuItemGrid';
import entree from '../data/entree.js';

export default class Entree extends React.Component {
  render() {
    console.log(this.props.params);
    return(<MenuItemGrid data={ entree } mealType="entree"/>);
  }
}
