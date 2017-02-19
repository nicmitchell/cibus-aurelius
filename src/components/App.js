import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  componentDidMount() {
    this.props.fetchAllFromFirebase();
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
}
