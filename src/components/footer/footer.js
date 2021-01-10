import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import LogoApp from "../logo/logo";

import "./footer.scss";

export default function Footer() {
  return (
    <div>
      <Container fluid className="footerTop">
        <Container>
          <Row>
            <Col className="col-12 col-md-3">
              <div className="mb-3">
                <LogoApp />
              </div>
              <div className="mb-3">
                Booking rooms in the best hotel of 2019 according to the
                association "Hotel views»
              </div>
            </Col>
            <Col className="col-12 col-md-2">
              <div className="mb-3">
                <h4>Navigation</h4>
              </div>
              <div className="mb-3">About Us</div>
              <div className="mb-3">New</div>
              <div className="mb-3">Support</div>
              <div className="mb-3">Services</div>
            </Col>
            <Col className="col-12 col-md-2">
              <div className="mb-3">
                <h4>About Us</h4>
              </div>
              <div className="mb-3">About services</div>
              <div className="mb-3">Our team</div>
              <div className="mb-3">Vacancy</div>
              <div className="mb-3">Investors</div>
            </Col>
            <Col className="col-12 col-md-2">
              <div className="mb-3">
                <h4>Support</h4>
              </div>
              <div className="mb-3">Docs</div>
              <div className="mb-3">Communities</div>
              <div className="mb-3">Contacts</div>
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
        <div className="align-self-center">ICONS</div>
      </Container>
    </div>
  );
}
