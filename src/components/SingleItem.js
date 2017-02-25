import React from 'react';
import { Grid, Col, Image, Glyphicon, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import ItemOptions from './ItemOptions';
import firebaseConfig from '../firebaseConfig';

export default class SingleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.menu.currentMenuItem || this.defaultState;
  }

  defaultState = {
    name: '',
    image: '',
    desc: '',
    side: '',
    time: '',
    options: '',
    recipe: '',
    imageStatus: 'hide'
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

  render() {
    const imgSrc = (this.state.image) ? `${ firebaseConfig.menuImgBaseURL }${ this.state.image }-1000.jpg?alt=media` : null;
    const editLink = `${ this.props.location.pathname }/edit`;
    return(
      <Grid key={ this.state.name }>
        <Col className="menu-card content">
          <div className={ `single ${ this.state.imageStatus }` }>
            { this.state.image && <Image responsive src={ imgSrc } onLoad={ (e) => this.imageLoaded(e) }/> }
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
        <Button><Link to={ editLink }>Edit</Link></Button>
      </Grid>
    )
  }
}
