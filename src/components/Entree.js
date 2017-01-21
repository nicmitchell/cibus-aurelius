import React from 'react';
import MenuItemGrid from './MenuItemGrid';
import entree from '../data/entree.js';

class Entree extends React.Component {
  render() {
    return(<MenuItemGrid data={ entree }/>);
  }
}

export default Entree;