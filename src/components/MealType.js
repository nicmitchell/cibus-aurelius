import React from 'react';
import MenuItemGrid from './MenuItemGrid';
import menu from '../data/menu-data';
// import entree from '../data/entree.js';
// import dessert from '../data/dessert.js';
// import light from '../data/light-fare.js';

class MealType extends React.Component {
  constructor(props) {
    super(props);
    // this.meals = {
    //   entree: entree,
    //   dessert: dessert,
    //   light: light
    // }
    this.mealType = this.props.params.mealType;
    this.data = menu[this.mealType];
  }
  render() {
    return(<MenuItemGrid data={ this.data } mealType={ this.mealType }/>);
  }
}

export default MealType;