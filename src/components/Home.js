import React from 'react';
import { Grid, Row, Col, Image, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Home extends React.Component {
 render() {
  return (
    <Grid>
      <Row>
        <Col md={4}>
          <LinkContainer to="/entree">
              <NavItem eventKey={1}>
                <h1>Entrees</h1>
                <Image responsive src="/images/home-entree.jpg"/>
              </NavItem>
          </LinkContainer>
        </Col>
        <Col md={4}>
          <LinkContainer to="/light">
            <NavItem eventKey={2}>
              <h1>Light Fare</h1>
              <Image responsive src="/images/home-light.jpg"/>
            </NavItem>
          </LinkContainer>
        </Col>
        <Col md={4}>
          <LinkContainer to="/dessert">
            <NavItem eventKey={3}>
              <h1>Desserts</h1>
              <Image responsive src="/images/home-dessert.jpg"/>
            </NavItem>
          </LinkContainer>
        </Col>
      </Row>
    </Grid>
  )
 }
}

export default Home;