import React from 'react';
import ItemOptions from './ItemOptions';
import { Image, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';
import Transition from 'react-addons-css-transition-group';
import { storage } from '../firebase';
import firebaseConfig from '../firebaseConfig';

export default class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStatus: this.props.image ? 'loading' : 'hide'
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.image) {
      this.setState({ imageStatus: 'hide' });
    } else {
      this.setState({ imageStatus: 'loading' });
    }
  }
  
  imageLoaded = (e) => {
    this.setState({ imageStatus: 'show' });
  }

  render() {
    const link = `/${ this.props.mealType }/${ encodeURIComponent(this.props.name)}`;
    const img = (this.props.image) ? `${firebaseConfig.imgBaseURL}${ this.props.image }-700.jpg?alt=media` : null;

    return(
      <Transition 
        transitionName="content"
        transitionAppear={ true }
        transitionAppearTimeout={ 1000 }
        transitionEnter={ true }
        transitionEnterTimeout={ 1000 }
        transitionLeaveTimeout={ 1000 }
        component="div"
      >
        <div className="menu-card">
          <Link to={ link } data={ this.props }>
            <div className={ `featured ${ this.state.imageStatus }` }>
              <img 
                ref={ (image) => this.image = image } 
                src={ img } 
                className={ `img-responsive` }
                width="100%" 
                onLoad={ (e) => this.imageLoaded(e) }
              />
            </div>
          </Link> 
          <div className="bottom">
            <Link to={ link }><h4 className="">{ this.props.name }</h4></Link>
            <p>{ this.props.desc }</p>
            { this.props.side && <p>Side: { this.props.side } </p>}
            <p className="prep-time"><Glyphicon glyph="time"/> { this.props.time }
            { this.props.options && <ItemOptions options={ this.props.options }/> }
            </p>
          </div>
        </div>
      </Transition>
    );
  }
}
