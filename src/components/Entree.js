import React from 'react';
import MenuItemGrid from './MenuItemGrid';
import entree from '../data/entree.js';

class Entree extends React.Component {
  render() {
    console.log(this.props.params);
    return(<MenuItemGrid data={ entree } mealType="entree"/>);
  }
}

export default Entree;