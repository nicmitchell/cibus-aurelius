import React from 'react';
import MenuItemGrid from './MenuItemGrid';
import entree from '../data/entree.js';
import dessert from '../data/dessert.js';
import light from '../data/light-fare.js';

class MealType extends React.Component {
  constructor(props) {
    super(props);
    this.meals = {
      entree: entree,
      dessert: dessert,
      light: light
    }
    this.mealType = this.props.params.mealType;
    this.data = this.meals[this.mealType];
  }
  render() {
    return(<MenuItemGrid data={ this.data } mealType={ this.mealType }/>);
  }
}

export default MealType;