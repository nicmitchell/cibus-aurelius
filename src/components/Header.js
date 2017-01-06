import React from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <header>
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
                  <NavItem eventKey={1} href="#">Entrees</NavItem>
                  <NavItem eventKey={2} href="#">Side Dishes</NavItem>
                  <NavItem eventKey={3} href="#">Light Fare</NavItem>
                  <NavItem eventKey={4} href="#">Dessert</NavItem>
                </Nav>        
              </Navbar.Collapse>
              <div className="clear"></div>
            </Navbar>
          </Col>
        </Row>
      </Grid>
    </header>     
    )
  }
}

export default Header;