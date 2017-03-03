import React from 'react';
import { Grid } from 'react-bootstrap';
import ItemCard from './ItemCard';

export default class MenuGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount = () => {
    const menu = this.props.menu;
    const mealType = this.state.mealType;
    const items = this.sortByImage(menu[mealType]);
    this.setState({ items, mealType });
  }

  componentWillReceiveProps = (nextProps) => {
    const menu = nextProps.menu;
    const mealType = nextProps.params.mealType;
    const items = this.sortByImage(menu[mealType]);
    this.setState({ items, mealType });
  }

  sortByImage = (items={}) => {
    const itemsArray = Object.keys(items).map(key => Object.assign({}, items[key], { key: key }));
    const sortedItems = itemsArray.sort((a, b) => {
      if (a.image && b.image) return 0;
      if (a.image && !b.image) return -1;
      if (!a.image && b.image) return 1;
    });
    return sortedItems;
  }

  render = () => {
    return(
      <Grid>
        <div className="menu-card-flex-container">
          { 
            this.state.items.map((item, idx) => {
              return <ItemCard { ...item } mealType={ this.state.mealType } setCurrentSingleItem={ this.props.setCurrentSingleItem } />
            })
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
