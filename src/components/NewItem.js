import React, { Component } from 'react';
import { Grid, Row, Col, Form, Button } from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import ItemForm from './ItemForm';

export default class NewItem extends Component {
  handleSubmit = ({ item, imageFile }) => {
    this.props.addNewMenuItem(item, imageFile);
  }

  render = () => {
    return (
      <ItemForm handleSubmit={ this.handleSubmit }/>
    )
  }
}
