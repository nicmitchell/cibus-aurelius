import React from 'react';
import { Grid, Col, Image, Glyphicon } from 'react-bootstrap';
import ItemOptions from './ItemOptions';
import firebaseConfig from '../firebaseConfig';

export default class SingleItem extends React.Component {
  constructor(props) {
    super(props);
    this.findMeal(this.props.params);
    this.state = {
      name: '',
      img: '',
      desc: '',
      side: '',
      time: '',
      options: '',
      recipe: '',
      imageStatus: 'hide'
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps.menu.currentMenuItem });
    if (!nextProps.image) {
      this.setState({ imageStatus: 'loading' });
    }
  }

  imageLoaded = (e) => {
    this.setState({ imageStatus: 'show' });
  }

  findMeal({ meal, mealType }) {
    const menu = this.props.menu[mealType] || {};
    this.props.fetchAllFromFirebase().then((ref) => {
      const menu = ref.val()[mealType];
      Object.keys(menu).forEach((item) => {
        const meal = menu[item];
        if (meal.slug === this.props.params.meal) {
          this.props.setCurrentSingleItem(meal);
          meal.img = (meal.image) ? `${ firebaseConfig.menuImgBaseURL }${ meal.image }-1000.jpg?alt=media` : null;
          this.setState({ ...meal })
        }
      }, this);
    });
  }

  render() {
    return(
      <Grid key={ this.state.name }>
        <Col className="menu-card content">
          <div className={ `single ${ this.state.imageStatus }` }>
            { this.state.image && <Image responsive src={ this.state.img } onLoad={ (e) => this.imageLoaded(e) }/> }
          </div>
          <div className="bottom">
            <h2 className="">{ this.state.name }</h2>
            <p>{ this.state.desc }</p>
            { this.state.side && <p>Side: { this.state.side } </p>}
            { this.state.time && <p className="prep-time"><Glyphicon glyph="time"/> { this.state.time }</p> }
            { this.state.options && <ItemOptions options={ this.state.options }/> }
            { this.state.recipe && 
              <div>
                <h3>Recipe</h3>
                { this.state.recipe }
              </div>
            }
          </div>
        </Col>
      </Grid>
    )
  }
}
