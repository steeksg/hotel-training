import React, { useState } from "react";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import LogoApp from "../logo/logo";

import { ModalLogIn, ModalSignUp } from "./modals";

import "./navibar.scss";

export default function Navibar() {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleCloseLogIn = () => {
    setShowLogIn(false);
  };
  const handleClickLogIn = () => {
    setShowLogIn(true);
  };
  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };
  const handleClickSignUp = () => {
    setShowSignUp(true);
  };

  return (
    <>
      <Navbar bg="light" variant="light" collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand href="/">
            <LogoApp />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto align-items-md-center">
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="/roomServices">
                  Room services
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/restaurant">
                  Restaurant
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/vacancy">Vacancy</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <NavDropdown title="Docs" id="basic-nav-dropdown">
                <NavDropdown.Item href="/licenses">Licenses</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/contract">Contract</NavDropdown.Item>
              </NavDropdown>
              <Button variant="outline-primary m-2" onClick={handleClickLogIn}>
                LOG IN
              </Button>
              <Button variant="primary m-2" onClick={handleClickSignUp}>
                SIGN UP
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalLogIn showLogIn={showLogIn} handleClose={handleCloseLogIn} />
      <ModalSignUp showSignUp={showSignUp} handleClose={handleCloseSignUp} />
    </>
  );
}
