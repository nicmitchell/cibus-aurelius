import React from 'react';
import { Grid, Row, Col, Image, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import config from '../firebaseConfig';

export default class Home extends React.Component {
  render() {
    const imgURL = config.menuImgBaseURL;
    return (
      <Grid className="nolist">
        <Row>
          <Col md={4}>
            <LinkContainer to="/entree">
              <NavItem eventKey={1}>
                <h1>Entrees</h1>
                <Image responsive src={ `${ imgURL }joes-special-700.jpg?alt=media` } />
              </NavItem>
            </LinkContainer>
          </Col>
          <Col md={4}>
            <LinkContainer to="/light">
              <NavItem eventKey={2}>
                <h1>Light Fare</h1>
                <Image responsive src={ `${ imgURL }fresh-froot-700.jpg?alt=media` }/>
              </NavItem>
            </LinkContainer>
          </Col>
          <Col md={4}>
            <LinkContainer to="/dessert">
              <NavItem eventKey={3}>
                <h1>Desserts</h1>
                <Image responsive src={ `${ imgURL }mint-mountain-700.jpg?alt=media` }/>
              </NavItem>
            </LinkContainer>
          </Col>
        </Row>
      </Grid>
    )
  }
}
