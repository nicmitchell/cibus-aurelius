import React from 'react';
import { MenuItem, NavDropdown, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import firebase from 'firebase';

export default class MenuDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
    this.listenForAuthentication();
  }

  listenForAuthentication = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: !!user });
    });
  }

  authenticate() {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  render() {
    const AuthWall = () => {
      return (
        <MenuItem onClick={ (e) => this.authenticate() }>
          Login with Github
        </MenuItem>
      )
    };

    const AddItem = () => {
      return (
        <LinkContainer to="/new">
          <MenuItem eventKey={5.1}>
            <Glyphicon glyph="plus" /> New
          </MenuItem>
        </LinkContainer>
      )
    };

    return (
      <NavDropdown eventKey={5} title="" id="menu-more-options">
        { !this.state.loggedIn && <AuthWall />}
        { this.state.loggedIn && <AddItem />}
      </NavDropdown>
    )
  }  
}
