import React, { Component } from 'react';
import ItemForm from './ItemForm';

export default class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.menu.currentMenuItem || {};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.menu.currentMenuItem) {
      this.setState({ ...nextProps.menu.currentMenuItem });
    }
  }

  render = () => {
    return(
      <ItemForm { ...this.state }/>
    )
  }
}