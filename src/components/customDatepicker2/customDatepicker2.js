import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";

import moment from "moment";

import "./customDatepicker2.scss";
import { faGalacticSenate } from "@fortawesome/free-brands-svg-icons";

export default function CustomDatepicker2() {
  const [dates, setDates] = useState({});
  const [show, setShow] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const changeHandler = ({ startDate, endDate }) => {
    setDates({ startDate: startDate, endDate: endDate });
  };

  const focusHandler = (focusedInput) => {
    // setFocusedInput(!focusedInput ? "startDate" : focusedInput);
    setFocusedInput(focusedInput);
  };

  const startDateString = dates.startDate;
  const endDateString = dates.endDate;

  return (
    <>
      {/* <DateRangePickerWrapper numberOfMonths={1} autoFocus /> */}
      <div className="dp">
        <div style={{ marginBottom: 16 }}>
          <input
            type="text"
            name="start date"
            value={startDateString}
            readOnly
            onClick={() => {
              // setShow(true);
              focusHandler("startDate");
            }}
          />
          <input
            type="text"
            name="end date"
            value={endDateString}
            readOnly
            onClick={() => {
              // setShow(true);
              focusHandler("endDate");
            }}
          />
        </div>
        <DateRangePicker
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
