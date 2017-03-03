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

  componentWillReceiveProps = (nextProps) => {
    this.setState({ authStatus: nextProps.menu.userAuthStatus });
  }

  render = () => {
    return (
      <ItemForm handleSubmit={ this.handleSubmit } className="show" authStatus={ this.state.authStatus } new/>
    )
  }

  static propTypes = {
    addNewMenuItem: React.PropTypes.func
  }
}
