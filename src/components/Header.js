import React from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends React.Component {
  render() {
    return (
        <Grid>
          <Row>
            <Col sm={6} md={12}> 
            <Navbar inverse collapseOnSelect className="nolist">
              <Navbar.Header>
                <Navbar.Brand>
                  <LinkContainer to="/"><NavItem eventKey={1}><span>Cibus Aurelius</span></NavItem></LinkContainer>
                </Navbar.Brand>
              </Navbar.Header>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav pullRight>
                  <LinkContainer to="/entree"><NavItem eventKey={1}>Entrees</NavItem></LinkContainer>
                  <LinkContainer to="/light"><NavItem eventKey={2}>Light Fare</NavItem></LinkContainer>
                  <LinkContainer to="/dessert"><NavItem eventKey={3}>Dessert</NavItem></LinkContainer>
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