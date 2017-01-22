import React from 'react';
import ItemOptions from './ItemOptions';
import { Image, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

class MenuItemCard extends React.Component {
  render() {
    const img = `/images/${ this.props.image || "no-pic" }-700.jpg`;
    const link = `/${ this.props.mealType }/${ encodeURIComponent(this.props.name)}`;

    return(
      <div className="menu-card">
        <Link to={ link }><Image responsive src={ img }/></Link>
        <div className="bottom">
          <Link to={ link }><h4 className="">{ this.props.name }</h4></Link>
          <p>{ this.props.desc }</p>
          { this.props.side && <p>Side: { this.props.side } </p>}
          <p className="prep-time"><Glyphicon glyph="time"/> { this.props.time }
          { this.props.options && <ItemOptions options={ this.props.options }/> }
          </p>
        </div>
      </div>
    );
  }
}

export default MenuItemCard;