import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import logo from './logo192.png';

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img className="App-logo" width="50" src={logo} alt="..nav brand" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
