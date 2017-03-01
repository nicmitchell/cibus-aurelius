import React, { Component } from 'react';
import ItemForm from './ItemForm';

export default class NewItem extends Component {
  handleSubmit = (item, imageFile) => {
    this.props.addNewMenuItem(item, imageFile);
  }

  render = () => {
    return (
      <ItemForm handleSubmit={ this.handleSubmit }/>
    )
  }

  static propTypes = {
    addNewMenuItem: React.PropTypes.func
  }
}
