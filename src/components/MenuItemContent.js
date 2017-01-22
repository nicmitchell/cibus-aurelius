import React from 'react';
import { Grid, Col, Image, Glyphicon } from 'react-bootstrap';
import ItemOptions from './ItemOptions';

export default class MenuItemContent extends React.Component {
  render() {
    const img = `/images/${ this.props.image || "no-pic" }-1000.jpg`;
    
    return(
      <Grid>
        <Col className="menu-card">
          <Image responsive src={ img } />
          <div className="bottom">
            <h4 className="">{ this.props.name }</h4>
            <p>{ this.props.desc }</p>
            { this.props.side && <p>Side: { this.props.side } </p>}
            <p className="prep-time"><Glyphicon glyph="time"/> { this.props.time }
            { this.props.options && <ItemOptions options={ this.props.options }/> }
            </p>
            <h4>Recipe</h4>
            <p>recipe ...</p>
          </div>
        </Col>
      </Grid>
    )
  }
}