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
                <Button
                  variant="primary"
                  className="modalLogIn--buttonLogIn w-100"
                >
                  LOG IN
                </Button>
              </Form.Group>

              <Form.Group
                controlId="formBasicSignUp"
                className="d-flex justify-content-between"
              >
                <div className="align-self-center">
                  Don't have a Toxin account?
                </div>
                <Button
                  variant="outline-primary"
                  className="modalLogIn--buttonSignUp"
                >
                  SIGN UP
                </Button>
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
        <Modal.Body>
          <h3 className="mb-4">Sign Up</h3>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Second name" />
            </Form.Group>

            <Form.Group controlId="formBasicGender">
              <Form.Check type="radio" id="radioGenderMan" name="radioGender">
                <Form.Check.Input type="radio" />
                <Form.Check.Label variant="primary">Man</Form.Check.Label>
              </Form.Check>

              <Form.Check type="radio" id="radioGenderWoman" name="radioGender">
                <Form.Check.Input type="radio" />
                <Form.Check.Label variant="primary">Woman</Form.Check.Label>
              </Form.Check>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
