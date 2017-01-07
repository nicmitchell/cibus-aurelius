import React from 'react';
import ItemOptions from './ItemOptions';
import { Col, Image, Glyphicon } from 'react-bootstrap';

class MenuItem extends React.Component {
  render() {
    return(
      <Col md={4}>
        <div className="menu-card">
          <Image responsive src="/images/home-entree.jpg"/>
          <div className="bottom">
            <h4 className="">{ this.props.name }</h4>
            <p>{ this.props.desc }</p>
            <p className="prep-time"><Glyphicon glyph="time"/> { this.props.time }
            { this.props.options && <ItemOptions options={ this.props.options }/> }
            </p>
          </div>
        </div>
      </Col>
    );
  }
}

export default MenuItem;