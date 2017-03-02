import React, { Component } from 'react';
import ItemForm from './ItemForm';

export default class NewItem extends Component {
  handleSubmit = (item, imageFile) => {
    this.props.addNewMenuItem(item, imageFile);
    this.props.router.push(`/${ item.type }`);
  }

  render = () => {
    return (
      <ItemForm handleSubmit={ this.handleSubmit } className="show" new/>
    )
  }

  static propTypes = {
    addNewMenuItem: React.PropTypes.func
  }
}
