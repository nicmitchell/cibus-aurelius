import React from 'react';
import { Grid, Col, Image, Glyphicon } from 'react-bootstrap';
import ItemOptions from './ItemOptions';
import menu from '../data/menu-data';

export default class MenuItemContent extends React.Component {
  constructor(props) {
    super(props);
    this.meal = this.findMeal(this.props.params.mealType);
    this.img = `/images/${ this.meal.image || "no-pic" }-1000.jpg`;
  }
  
  findMeal(mealType) {
    return menu[mealType].find((item) => {
      return item.name === this.props.params.meal;
    }, this);
  }

  render() {
    return(
      <Grid>
        <Col className="menu-card content">
          <Image responsive src={ this.img } />
          <div className="bottom">
            <h4 className="">{ this.meal.name }</h4>
            <p>{ this.meal.desc }</p>
            { this.meal.side && <p>Side: { this.meal.side } </p>}
            <p className="prep-time"><Glyphicon glyph="time"/> { this.meal.time }
            { this.meal.options && <ItemOptions options={ this.meal.options }/> }
            </p>
            <h4>Recipe</h4>
            { this.meal.recipe }
          </div>
        </Col>
      </Grid>
    )
  }
}