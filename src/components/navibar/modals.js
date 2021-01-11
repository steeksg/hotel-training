import React from "react";
import { Modal, Form, Button, Container } from "react-bootstrap";

export function ModalLogIn(props) {
  const { showLogIn, handleClose } = props;
  return (
    <>
      <Modal centered show={showLogIn} onHide={handleClose}>
        <Container className="px-2 py-3">
          <Modal.Body>
            <h3 className="mb-4">Log In</h3>
            <Form>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLogIn">
              <Button variant="primary" className="modalLogIn--buttonLogIn w-100">LOG IN</Button>
              </Form.Group>

              <Form.Group
                controlId="formBasicSignUp"
                className="d-flex justify-content-between"
              >
                <div className="align-self-center">
                  Don't have a Toxin account?
                </div>
                <Button variant="outline-primary" className="modalLogIn--buttonSignUp">SIGN UP</Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Container>
      </Modal>
    </>
  );
}

export function ModalSignUp(props) {
  const { showSignUp, handleClose } = props;
  return (
    <>
      <Modal
        centered
        show={showSignUp}
        onHide={handleClose}
        className="modalSignUp"
      >
        <Modal.Header>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
