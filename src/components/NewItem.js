import React, { Component } from 'react';
import ItemForm from './ItemForm';

export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authStatus: this.props.menu.userAuthStatus
    }
  }

  handleSubmit = (item, imageFile) => {
    this.props.addNewMenuItem(item, imageFile);
    this.props.router.push(`/${ item.type }`);
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.props.router.goBack();
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ authStatus: nextProps.menu.userAuthStatus });
  }

  render = () => {
    return (
      <ItemForm handleSubmit={ this.handleSubmit } className="show" authStatus={ this.state.authStatus } handleCancel={ (e) => this.handleCancel(e) } new/>
    )
  }

  static propTypes = {
    addNewMenuItem: React.PropTypes.func
  }
}
