import React from 'react';
import Content from './Content';
import dessert from '../data/dessert.js';

class Dessert extends React.Component {
  render() {
    return(<Content data={ dessert }/>);
  }
}

export default Dessert;