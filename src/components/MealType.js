import React from 'react';
import MenuItemGrid from './MenuItemGrid';
import menu from '../data/menu-data';

export default class MealType extends React.Component {
  constructor(props) {
    super(props);
    this.mealType = this.props.params.mealType;
    this.data = menu[this.mealType];
  }
  render() {
    return(<MenuItemGrid data={ this.data } mealType={ this.mealType }/>);
  }
}
