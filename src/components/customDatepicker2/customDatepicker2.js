import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import { Row, Col } from "react-bootstrap";
import "react-dates/initialize";

import moment from "moment";

import "./customDatepicker2.scss";

export default function CustomDatepicker2() {
  const [dates, setDates] = useState({});
  // const [show, setShow] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const changeHandler = ({ startDate, endDate }) => {
    setDates({
      startDate: moment(startDate),
      endDate: moment(endDate),
    });
  };

  const focusHandler = (focusedInput) => {
    setFocusedInput(focusedInput);
  };

  const startDateString =
    dates.startDate && dates.startDate.format("DD.MM.YYYY");
  const endDateString = dates.endDate && dates.endDate.format("DD.MM.YYYY");

  return (
    <>
      <div className="dp">
        <Row>
          <Col className="col-12 col-sm-6">
            <h4>ARRIVE</h4>
            <input
              className="dp--input form-control"
              type="text"
              name="start date"
              value={startDateString}
              readOnly
              onClick={() => {
                focusHandler("startDate");
              }}
              placeholder="DD.MM.YYYY"
            />
          </Col>
          <Col className="col-12 col-sm-6">
            <h4>DEPARTURE</h4>
            <input
              className="dp--input form-control"
              type="text"
              name="end date"
              value={endDateString}
              readOnly
              onClick={() => {
                focusHandler("endDate");
              }}
              placeholder="DD.MM.YYYY"
            />
          </Col>
        </Row>
        <DateRangePicker
          startDateId="startDateId"
          endDateId="endDateId"
          startDate={dates.startDate}
          endDate={dates.endDate}
          onDatesChange={({ startDate, endDate }) =>
            changeHandler({ startDate, endDate })
          }
          focusedInput={focusedInput}
          onFocusChange={(focusedInput) => focusHandler(focusedInput)}
          numberOfMonths={1}
        />
      </div>
    </>
  );
}
