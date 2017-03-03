import React from 'react';
import { Grid } from 'react-bootstrap';
import ItemCard from './ItemCard';

export default class MenuGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.sortByImage(this.props.menu[this.props.params.mealType]),
      mealType: this.props.params.mealType
    }
  }

  arrayify(object={}) {
    return Object.keys(object).map(key => {
      return { ...object[key], key: key };
    });
  }

  componentWillReceiveProps = (nextProps) => {
    const menu = nextProps.menu;
    const mealType = nextProps.params.mealType;
    const items = this.sortByImage(menu[mealType]);
    this.setState({ items, mealType });
  }

  sortByImage = (items={}) => {
    const itemsArray = this.arrayify(items);
    return itemsArray.sort((a, b) => {
      return !!b.image - !!a.image;
    });
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
