import React from "react";
import { Form, Button } from "react-bootstrap";
import "./formSearchRoom.scss";

export default function FormSearchRoom() {
  return (
    <>
      <Form className="bg-light rounded-lg border-light p-3 formSearchRoom ">
        <Form.Group controlId="formBasicEmail">
          <h3>Will find rooms according to your wishes</h3>
          <Form.Label><h4>ARRIVE</h4></Form.Label>
          <Form.Control type="text" placeholder="Date arrive" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label><h4>DEPARTURE</h4></Form.Label>
          <Form.Control type="text" placeholder="Date departure" />
        </Form.Group>

        <Form.Group controlId="controlSelect">
          <Form.Label><h4>Count guests</h4></Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          FIND ROOMS
        </Button>
      </Form>
    </>
  );
}
