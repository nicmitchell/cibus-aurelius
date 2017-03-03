import React from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import DropdownMenu from './DropdownMenu';

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
              <NavItem eventKey={2}><Glyphicon glyph="cutlery" /> Entrees</NavItem>
            </LinkContainer>
            <LinkContainer to="/light">
              <NavItem eventKey={3}><Glyphicon glyph="leaf" /> Light Fare</NavItem>
            </LinkContainer>
            <LinkContainer to="/dessert">
              <NavItem eventKey={4}><Glyphicon glyph="ice-lolly-tasted" /> Dessert</NavItem>
            </LinkContainer>
            <DropdownMenu { ...this.props }/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
