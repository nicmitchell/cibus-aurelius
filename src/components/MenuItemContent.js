import React from 'react';
import { Grid, Col, Image, Glyphicon } from 'react-bootstrap';
import Transition from 'react-addons-css-transition-group'
import ItemOptions from './ItemOptions';
import menu from '../data/menu-data';

export default class MenuItemContent extends React.Component {
  constructor(props) {
    super(props);
    this.meal = this.findMeal(this.props.params.mealType);
    this.img = `/images/${ this.meal.image || "no-pic" }-1000.jpg`;
    this.state = {};
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({ show: !this.state.show });
    }, 300);
  }
  
  findMeal(mealType) {
    return menu[mealType].find((item) => {
      return item.name === this.props.params.meal;
    }, this);
  }

  render() {
    return(
      <Transition key={ this.meal.name }
        transitionName="content"
        transitionAppear={ true }
        transitionAppearTimeout={ 1000 }
        transitionEnter={ true }
        transitionEnterTimeout={ 1000 }
        transitionLeaveTimeout={ 1000 }
        component="div"
      >
        <Grid key={ this.meal.name }>
          <Col className="menu-card content">
            <Image responsive src={ this.img } />
            <div className="bottom">
              <h2 className="">{ this.meal.name }</h2>
              <p>{ this.meal.desc }</p>
              { this.meal.side && <p>Side: { this.meal.side } </p>}
              <p className="prep-time"><Glyphicon glyph="time"/> { this.meal.time }
              { this.meal.options && <ItemOptions options={ this.meal.options }/> }
              </p>
              <h3>Recipe</h3>
              { this.meal.recipe }
            </div>
          </Col>
        </Grid>
      </Transition>
    )
  }
}
