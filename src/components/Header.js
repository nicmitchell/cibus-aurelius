import React from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="nolist">
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/">
              <NavItem eventKey={1}>
                <Glyphicon glyph="grain"/>
                <span className="title">Cibus Aurelius</span>
              </NavItem>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/entree">
              <NavItem eventKey={2}>Entrees</NavItem>
            </LinkContainer>
            <LinkContainer to="/light">
              <NavItem eventKey={3}>Light Fare</NavItem>
            </LinkContainer>
            <LinkContainer to="/dessert">
              <NavItem eventKey={4}>Dessert</NavItem>
            </LinkContainer>
          </Nav>        
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
