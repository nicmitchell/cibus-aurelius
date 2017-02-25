import React, { Component } from 'react';
import NewItem from './NewItem';
import { Grid, Col, Image, Glyphicon, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import ItemOptions from './ItemOptions';
import firebaseConfig from '../firebaseConfig';

export default class EditItem extends Component {
  constructor(props) {
    super(props);
    this.setCurrentMeal();
    // this.state = this.props.menu.currentMenuItem;
    console.log(this.props);
  }

  setCurrentMeal = () => {
    if (!this.props.menu.currentMenuItem) {
      this.findMeal(this.props.params);
    } else {
      this.state = this.props.menu.currentMenuItem;
    }
  }

  findMeal({ meal, mealType }) {
    this.props.fetchAllFromFirebase().then((ref) => {
      const menu = ref.val()[mealType];
      Object.keys(menu).forEach((item) => {
        const meal = menu[item];
        if (meal.slug === this.props.params.meal) {
          this.props.setCurrentSingleItem(meal);
          meal.img = (meal.image) ? `${ firebaseConfig.menuImgBaseURL }${ meal.image }-1000.jpg?alt=media` : null;
          this.setState({ ...meal })
        }
      }, this);
    });
  }

  render = () => {
    return(
      <NewItem { ...this.state }/>
    )
  }
}