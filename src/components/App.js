import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchAllFromFirebase().then((data) => {
      this.props.findCurrentMenuItem(this.props.params);
    });
  }

  render() {
    return (
      <div>
        <Header />
          { React.cloneElement({...this.props}.children, {...this.props}) }
        <Footer />
      </div>
    );
  }

  static propTypes = {
    fetchAllFromFirebase: React.PropTypes.func.isRequired,
    findCurrentMenuItem: React.PropTypes.func.isRequired,
    params: React.PropTypes.object.isRequired
  }
}
