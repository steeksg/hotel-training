import React, { useState } from "react";
import { Form, Button, Row, Col, Container} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./formSearchRoom.scss";

export default function FormSearchRoom() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <Form className="bg-light rounded-lg border-light pt-5 pb-4 px-3 formSearchRoom ">
        <Container>
          <h3>Will find rooms according to your wishes</h3>
          <Row className="mt-3">
            <Col className="col-12 col-sm-6">
              <Form.Group controlId="formDateArrive">
                <Form.Label className="mb-0">
                  <h4>ARRIVE</h4>
                </Form.Label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  startDate={startDate}
                  endDate={endDate}
                />
              </Form.Group>
            </Col>
            <Col className="col-12 col-sm-6">
              <Form.Group controlId="formDateDeparture">
                <Form.Label className="mb-0">
                  <h4>DEPARTURE</h4>
                </Form.Label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  startDate={startDate}
                  endDate={endDate}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <Form.Group controlId="controlSelectCountGuests">
                <Form.Label className="mb-0">
                  <h4>Count guests</h4>
                </Form.Label>
                <Form.Control as="select">
                  <option>How much guests</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <Button href='/rooms' variant="primary" type="submit" className="w-100">
                FIND ROOMS
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}
