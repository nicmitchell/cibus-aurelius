import React from 'react';
import Content from './Content';
import entree from '../data/entree.js';

class Entree extends React.Component {
  render() {
    return(<Content data={ entree }/>);
  }
}

export default Entree;