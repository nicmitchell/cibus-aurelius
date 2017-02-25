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
  }

  setCurrentMeal = () => {
    if (!this.props.menu.currentMenuItem) {
      this.props.findCurrentMenuItem(this.props.params);
    } else {
      this.state = this.props.menu.currentMenuItem;
    }
  }

  render = () => {
    return(
      <NewItem { ...this.state }/>
    )
  }
}