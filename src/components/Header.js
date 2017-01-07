import React from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends React.Component {
  render() {
    return (
        <Grid>
          <Row>
            <Col md={12}> 
            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand><h1>Cibus Aurelius</h1></Navbar.Brand>
              </Navbar.Header>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav pullRight>
                  <LinkContainer to="/entree"><NavItem eventKey={1}>Entrees</NavItem></LinkContainer>
                  <LinkContainer to="/light"><NavItem eventKey={3}>Light Fare</NavItem></LinkContainer>
                  <LinkContainer to="/dessert"><NavItem eventKey={4}>Dessert</NavItem></LinkContainer>
                </Nav>        
              </Navbar.Collapse>
              <div className="clear"></div>
            </Navbar>
          </Col>
        </Row>
      </Grid>  
    )
  }
}

export default Header;