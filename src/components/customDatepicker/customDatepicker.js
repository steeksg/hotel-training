import React from "react";

import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// TODO: Make full refactoring

import "./customDatepicker.scss";

export default function CustomDatepicker(props) {
  const { date, setDate } = props;
  return (
    <>
      <DatePicker
        showPopperArrow={false}
        closeOnScroll={true}
        selected={date}
        onChange={(date) => setDate(date)}
        placeholderText="DD.MM.YYYY"
        dateFormat="dd.MM.yyyy"
        minDate={new Date()}
      />
    </>
  );
}
