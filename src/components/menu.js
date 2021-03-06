import React from 'react';
import {Navbar, NavItem, Nav, Badge} from 'react-bootstrap';

// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {findDOMNode} from 'react-dom';
// import {postBooks, deleteBooks} from '../../actions/booksActions';

class Menu extends React.Component{
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">React-Bootstrap</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="/about">About</NavItem>
                <NavItem eventKey={2} href="/contacts">Contact Us</NavItem>

              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="/admin">Admin</NavItem>
                <NavItem eventKey={2} href="/cart">
                    You Cart <Badge className="badge">1</Badge>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    )
  }
}

export default Menu;
