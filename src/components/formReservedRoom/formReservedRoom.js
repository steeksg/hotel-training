import React from "react";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

import SelectGuests from "../selectGuests/selectGuests";

import "./formReservedRoom.scss";

export default function FormReservedRoom(props) {
  const {
    number,
    price,
    reserveData,
    handleChangeDate,
    handleChangeGuestsCount,
  } = props;

  const getDays = () => {
    const msDay = 60 * 60 * 24 * 1000;
    return (reserveData.dates.end - reserveData.dates.start) / msDay;
  };

  const getPriceByDay = () => {
    return getDays() * price.byDay;
  };

  const getFeeServices = () => {
    return price.service - price.discountService;
  };

  const getResult = () => {
    return getPriceByDay() + getFeeServices() + price.additionalService;
  };

  return (
    <Form className="formReservedRoom px-2 pt-5 pb-4">
      <Container>
        <Row className="formReservedRoom--rowHeader mb-3">
          <Col className="col-4 formReservedRoom--number">
            №<span className="formReservedRoom--numberValue">{number}</span>
          </Col>
          <Col className="col-8 text-right">
            <span className="formReservedRoom--priceValue">{`${price.byDay}$ `}</span>
            by day
          </Col>
        </Row>
        <Row className="formReservedRoom--rowDates">
          <Col className="col-12 col-sm-6">
            <Form.Group controlId="formDateArrive">
              <Form.Label className="mb-0">
                <h4>ARRIVE</h4>
              </Form.Label>
              <DatePicker
                selectsStart
                selected={reserveData.dates.start}
                placeholderText="DD.MM.YYYY"
                dateFormat="dd.MM.yyyy"
                onChange={(date) => handleChangeDate(date, "start")}
                startDate={reserveData.dates.start}
                endDate={reserveData.dates.end}
                minDate={new Date()}
              />
            </Form.Group>
          </Col>
          <Col className="col-12 col-sm-6">
            <Form.Group controlId="formDateDeparture">
              <Form.Label className="mb-0">
                <h4>DEPARTURE</h4>
              </Form.Label>
              <DatePicker
                selectsEnd
                selected={reserveData.dates.end}
                placeholderText="DD.MM.YYYY"
                dateFormat="dd.MM.yyyy"
                onChange={(date) => handleChangeDate(date, "end")}
                startDate={reserveData.dates.start}
                endDate={reserveData.dates.end}
                minDate={Math.max(new Date(), reserveData.dates.strar)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="formReservedRoom--rowGuests">
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
        <Row className="formReservedRoom--rowPriceDays mb-2">
          <Col>{`${price.byDay}$ x ${getDays()} days`}</Col>
          <Col className="text-right col-3 pl-0">{`${getPriceByDay()}$`}</Col>
        </Row>
        <Row className="formReservedRoom--rowPriceService mb-2">
          <Col>{`Service fee: discount ${price.discountService}$`}</Col>
          <Col className="text-right col-3 pl-0">{getFeeServices()}$</Col>
        </Row>
        <Row className="formReservedRoom--rowPriceAdditionalService mb-2">
          <Col>Fee for additional services</Col>
          <Col className="text-right col-4 lx-0">
            {price.additionalService}$
          </Col>
        </Row>
        <Row className="formReservedRoom--rowPriceResult no-gutter">
          <Col className="formReservedRoom--resultPrice d-flex justify-content-between mb-4">
            <div>Result</div>
            <div className="formReservedRoom--divider"></div>
            <div>{getResult()}$</div>
          </Col>
        </Row>
        <Row className="formReservedRoom--rowButtonReserve">
          <Col>
            <Button variant="primary" type="submit" className="w-100">
              RESERVE
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}
