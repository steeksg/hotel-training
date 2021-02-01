import React from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import SelectGuests from "../selectGuests/selectGuests";
import CustomButton from "../customButton/customButton";
import CustomDatepicker2 from "../customDatepicker2/customDatepicker2";

import "./formSearchRoom.scss";

export default function FormSearchRoom({
  reserveData,
  handleChangeDate,
  handleChangeGuestsCount,
}) {
  return (
    <>
      <Form className="bg-light rounded-lg border-light pt-5 pb-4 px-3 formSearchRoom ">
        <Container>
          <h3 className="mb-4">Will find rooms according to your wishes</h3>

          <CustomDatepicker2
            setDates={handleChangeDate}
            dates={reserveData.dates}
            type="rangeDouble"
          />

          <Row className="mt-2">
            <Col>
              <Form.Group controlId="controlSelectCountGuests">
                <Form.Label className="mb-0">
                  <h4>Count guests</h4>
                </Form.Label>
                <SelectGuests
                  guests={reserveData.guests}
                  changeCountGuests={handleChangeGuestsCount}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <CustomButton as={NavLink} to="/rooms" title="find rooms" />
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}
