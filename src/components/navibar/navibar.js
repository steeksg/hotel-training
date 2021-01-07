import React from "react";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";

import Logo from "./Logo.svg";

export default function Navibar() {
  return (
    <>
      <Navbar bg="light" variant="light" collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand href="#home">
            {/* TODO: Fix with routing */}
            <img
              alt="Logo"
              src={Logo}
              max-width="40"
              max-height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#roomServices">Room services</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#restaurant">Restaurant</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#vacansions">Vacansions</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
              <NavDropdown title="Docs" id="basic-nav-dropdown">
                <NavDropdown.Item href="#licenses">Licenses</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#contract">Contract</NavDropdown.Item>
              </NavDropdown>
              <Button variant="outline-primary m-2">LOG IN</Button>
              <Button variant="primary m-2">SIGN UP</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
