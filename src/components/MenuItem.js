import React from 'react';
import ItemOptions from './ItemOptions';
import { Image, Glyphicon } from 'react-bootstrap';

class MenuItem extends React.Component {
  render() {
    const img = `/images/${ this.props.image || "no-pic" }-700.jpg`;
    return(
      <div className="menu-card">
        <Image responsive src={ img }/>
        <div className="bottom">
          <h4 className="">{ this.props.name }</h4>
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

export default MenuItem;