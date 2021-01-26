import React, { useState } from "react";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import LogoApp from "../logo/logo";
import { NavLink } from "react-router-dom";

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
          <Navbar.Brand as={NavLink} to="/">
            <LogoApp />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto align-items-md-center">
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/roomServices">
                  Room services
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="/restaurant">Restaurant</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/vacancy">
                Vacancy
              </Nav.Link>
              <Nav.Link as={NavLink} to="/news">
                News
              </Nav.Link>
              <NavDropdown title="Docs" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/licenses">
                  Licenses
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/contract">
                  Contract
                </NavDropdown.Item>
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
      <ModalLogIn
        showLogIn={showLogIn}
        setShowSignUp={handleClickSignUp}
        handleClose={handleCloseLogIn}
      />
      <ModalSignUp
        showSignUp={showSignUp}
        setShowLogIn={handleClickLogIn}
        handleClose={handleCloseSignUp}
      />
    </>
  );
}
