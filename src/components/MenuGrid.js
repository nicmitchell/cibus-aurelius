import React from 'react';
import { Grid } from 'react-bootstrap';
import ItemCard from './ItemCard';

export default class MenuGrid extends React.Component {
  getColumns = (items) => {
    const total = items.length;
    const columnLength = parseInt(total / 3, 10);
    const remainder = total % 3;
    const column1End = (remainder) ? columnLength + 1 : columnLength;
    const column2End = (columnLength * 2) + remainder;

    const col1 = items.slice(0, column1End);
    const col2 = items.slice(column1End, column2End);
    const col3 = items.slice(column2End);

    return [col1, col2, col3];
  }

  // TODO: Sort columns by image presence
  sortByImage = (items) => {
    return items.sort((a, b) => {
      if (a.image && b.image) return 0;
      if (a.image && !b.image) return -1;
      if (!a.image && b.image) return 1;
    });
  }

  render = () => {
    const mealType = this.props.params.mealType;
    const menuItems = this.props.menu[mealType] || {};
    const menuItemsArray = Object.keys(menuItems).map(key => Object.assign({}, menuItems[key], { key: key }));
    // const columns = this.getColumns(menuItemsArray);

    return(
      <Grid>
        <div className="menu-card-flex-container">
          { 
            menuItemsArray.map((item, idx) => <ItemCard { ...item } mealType={ mealType } setCurrentSingleItem={ this.props.setCurrentSingleItem } />)
          }
        </div>
      </Grid>
    )
  }

  static propTypes = {
    params: React.PropTypes.object.isRequired,
    setCurrentSingleItem: React.PropTypes.func,
    menu: React.PropTypes.object
  }
}
