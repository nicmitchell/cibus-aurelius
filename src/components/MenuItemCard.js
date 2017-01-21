import React from 'react';
import ItemOptions from './ItemOptions';
import { Image, Glyphicon, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class MenuItem extends React.Component {
  render() {
    const img = `/images/${ this.props.image || "no-pic" }-700.jpg`;
    const link = `/entree/${ encodeURIComponent(this.props.name)}`;
    return(
      <div className="menu-card">
        <LinkContainer to={ link }>
          <NavItem eventKey={1}>
            <Image responsive src={ img }/>
            <div className="bottom">
              <h4 className="">{ this.props.name }</h4>
              <p>{ this.props.desc }</p>
              { this.props.side && <p>Side: { this.props.side } </p>}
              <p className="prep-time"><Glyphicon glyph="time"/> { this.props.time }
              { this.props.options && <ItemOptions options={ this.props.options }/> }
              </p>
            </div>
          </NavItem>
        </LinkContainer>
      </div>
    );
  }
}

export default MenuItem;