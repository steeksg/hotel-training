import React from "react";
import { Container, Row, Col, Form, Nav } from "react-bootstrap";
import LogoApp from "../logo/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.scss";

export default function Footer() {
  return (
    <div>
      <Container fluid className="footerTop">
        <Container>
          <Row>
            <Col className="col-12 col-md-3">
              <Nav>
                <Nav.Link href="/" className="mb-3 p-0">
                  <LogoApp />
                </Nav.Link>
              </Nav>

              <div className="mb-3">
                Booking rooms in the best hotel of 2019 according to the
                association "Hotel views»
              </div>
            </Col>
            <Col className="col-12 col-md-2">
              <div className="mb-3">
                <h4>Navigation</h4>
              </div>

              <Nav>
                <Nav.Link
                  href="/about"
                  className="mb-3 p-0 w-100 footer--navLink"
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  href="/news"
                  className="mb-3 p-0 w-100 footer--navLink"
                >
                  News
                </Nav.Link>
                <Nav.Link
                  href="/support"
                  className="mb-3 p-0 w-100 footer--navLink"
                >
                  Support
                </Nav.Link>
                <Nav.Link
                  href="/roomServices"
                  className="mb-3 p-0 w-100 footer--navLink"
                >
                  Services
                </Nav.Link>
              </Nav>
            </Col>
            <Col className="col-12 col-md-2">
              <div className="mb-3">
                <h4>About Us</h4>
              </div>

              <Nav>
                <Nav.Link
                  href="/about"
                  className="mb-3 p-0 w-100 footer--navLink"
                >
                  About services
                </Nav.Link>
                <Nav.Link
                  href="/team"
                  className="mb-3 p-0 w-100 footer--navLink"
                >
                  Our team
                </Nav.Link>
                <Nav.Link
                  href="/vacancy"
                  className="mb-3 p-0 w-100 footer--navLink"
                >
                  Vacancy
                </Nav.Link>
                <Nav.Link
                  href="/investors"
                  className="mb-3 p-0 w-100 footer--navLink"
                >
                  Investors
                </Nav.Link>
              </Nav>
            </Col>

            <Col className="col-12 col-md-2">
              <div className="mb-3">
                <h4>Support</h4>
              </div>
              <Nav>
                <Nav.Link
                  href="/docs"
                  className="mb-3 p-0 w-100 footer--navLink"
                >
                  Docs
                </Nav.Link>
                <Nav.Link
                  href="/communities"
                  className="mb-3 p-0 w-100 footer--navLink"
                >
                  Communities
                </Nav.Link>
                <Nav.Link
                  href="/contacts"
                  className="mb-3 p-0 w-100 footer--navLink"
                >
                  Contacts
                </Nav.Link>
              </Nav>
            </Col>

            <Col className="col-12 col-md-3">
              <div>
                <h4 className="mb-3">Subscribe</h4>
                <p className="mb-3">Get special offers and service news</p>
              </div>
              <Form.Group controlId="ControlInput">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="d-flex justify-content-between footerBottom">
        <div className="align-self-center">
          Copyright © 2018 Toxin a hotel. All rights are cleared.
        </div>
        <div className="align-self-center d-flex flex-row footerBottom--icons ml-2">
          <div className="align-self-center">
            <a href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
          <div className="align-self-center ml-2">
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            </a>
          </div>
          <div className="align-self-center ml-2">
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
