import React from 'react';
import ItemOptions from './ItemOptions';
import { Col, Glyphicon } from 'react-bootstrap';

class MenuItem extends React.Component {
  render() {
    return(
      <Col md={4}>
        <div className="gall_block">
          {/* <img src="images/page2_img1.jpg" alt="" /> */}
            <div className="gall_bot">
              <h4 className="itemTitle">{ this.props.name }</h4>
              <p>{ this.props.desc }</p>
              <p><Glyphicon glyph="time"/> { this.props.time }</p>
              { this.props.options && <ItemOptions options={ this.props.options }/> }
            </div>
        </div>
      </Col>
    );
  }
}

export default MenuItem;