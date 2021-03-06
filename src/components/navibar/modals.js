import React, { useState } from "react";
import { Modal, Form, Button, Container } from "react-bootstrap";
import CustomDatepicker from "../customDatepicker/customDatepicker";

import CustomButton from "../customButton/customButton";

export function ModalLogIn(props) {
  const { showLogIn, handleClose } = props;

  const { setShowSignUp } = props;

  const openSignUp = () => {
    handleClose();
    setShowSignUp();
  };

  return (
    <>
      <Modal
        centered
        show={showLogIn}
        onHide={handleClose}
        className="modalLogIn"
      >
        <Container className="px-3 py-3">
          <Modal.Body>
            <h3 className="mb-4">Log In</h3>
            <Form>
              <Form.Group className="mb-2" controlId="formLogInEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLogIn">
                <CustomButton title="log in" />
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
                  onClick={openSignUp}
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
  const [birthDate, setBirthDate] = useState(null);

  const { setShowLogIn } = props;

  const openLogIn = () => {
    handleClose();
    setShowLogIn();
  };

  return (
    <>
      <Modal
        centered
        show={showSignUp}
        onHide={handleClose}
        className="modalSignUp"
      >
        <Container className="px-3 py-3">
          <Modal.Body>
            <h3 className="mb-4">Sign Up</h3>
            <Form>
              <Form.Group controlId="formSignUpName" className="mb-2">
                <Form.Control type="text" placeholder="First name" />
              </Form.Group>

              <Form.Group controlId="formSignUpSecondNAme" className="mb-2">
                <Form.Control type="text" placeholder="Second name" />
              </Form.Group>

              <Form.Group controlId="formSignUpcGender" className="d-flex mb-3">
                <div className="checkboxContainer mr-2">
                  <Form.Check type="radio" id="radioGenderMan" custom>
                    <Form.Check.Input type="radio" name="radioGender" />
                    <Form.Check.Label>Man</Form.Check.Label>
                  </Form.Check>
                </div>
                <div className="checkboxContainer">
                  <Form.Check type="radio" id="radioGenderWoman" custom>
                    <Form.Check.Input type="radio" name="radioGender" />
                    <Form.Check.Label>Woman</Form.Check.Label>
                  </Form.Check>
                </div>
              </Form.Group>

              <Form.Group
                controlId="formDateBirth"
                className="d-flex flex-column"
              >
                <Form.Label className="mb-0">
                  <h4 className="mb-2">Date of birth</h4>
                </Form.Label>
                <CustomDatepicker date={birthDate} setDate={setBirthDate} />
              </Form.Group>

              <Form.Group controlId="formSignUpEmail" className="mb-2">
                <Form.Label className="mb-0">
                  <h4>Service login data</h4>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group controlId="formSignUpPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicSpecialOffers">
                <Form.Check
                  type="switch"
                  id="getSpecialOffers"
                  label="Get special offers"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLogIn">
                <CustomButton title="sign up" />
              </Form.Group>

              <Form.Group
                controlId="formBasicSignUp"
                className="d-flex justify-content-between"
              >
                <div className="align-self-center">
                  Have an account on toxin?
                </div>
                <Button
                  variant="outline-primary"
                  className="modalSignUp--buttonLogIn"
                  onClick={openLogIn}
                >
                  LOG IN
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Container>
      </Modal>
    </>
  );
}
