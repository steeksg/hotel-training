import React from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import { enGB } from "date-fns/locale";
import { NavLink } from "react-router-dom";

import SelectGuests from "../selectGuests/selectGuests";
import CustomButton from "../customButton/customButton";
import "./formSearchRoom.scss";

registerLocale("enGB", enGB);

export default function FormSearchRoom({
  reserveData,
  handleChangeDate,
  handleChangeGuestsCount,
}) {
  const ButtonLine = () => {
    return (
      <div className="buttonLine ">
        <div className="buttonLine--clear">clear</div>
        <div className="buttonLine--apply">apply</div>
      </div>
    );
  };

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
                  locale="enGB"
                  selectsStart
                  selected={reserveData.dates.start}
                  placeholderText="DD.MM.YYYY"
                  dateFormat="dd.MM.yyyy"
                  onChange={(date) => handleChangeDate(date, "start")}
                  startDate={reserveData.dates.start}
                  endDate={reserveData.dates.end}
                  minDate={new Date()}
                >
                  <div className="buttonLine ">
                    <div className="buttonLine--clear">clear</div>
                    <div className="buttonLine--apply">apply</div>
                  </div>
                </DatePicker>
              </Form.Group>
            </Col>
            <Col className="col-12 col-sm-6">
              <Form.Group controlId="formDateDeparture">
                <Form.Label className="mb-0">
                  <h4>DEPARTURE</h4>
                </Form.Label>
                <DatePicker
                  locale="enGB"
                  selectsEnd
                  selected={reserveData.dates.end}
                  placeholderText="DD.MM.YYYY"
                  dateFormat="dd.MM.yyyy"
                  onChange={(date) => handleChangeDate(date, "end")}
                  startDate={reserveData.dates.start}
                  endDate={reserveData.dates.end}
                  minDate={Math.max(new Date(), reserveData.dates.start)}
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
