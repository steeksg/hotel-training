import React, { useState } from "react";
import { DateRangePicker, SingleDatePicker } from "react-dates";
import { Row, Col } from "react-bootstrap";
import "react-dates/initialize";

import moment from "moment";

import "./customDatepicker2.scss";

import Icon from "@mdi/react";
import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";

export default function CustomDatepicker2({
  dates,
  setDates,
  type,
  date,
  setDate,
}) {
  const [focusedInput, setFocusedInput] = useState(null);

  const changeHandler = ({ startDate, endDate }) => {
    setDates({
      startDate: startDate ? moment(startDate) : null,
      endDate: endDate ? moment(endDate) : null,
    });
  };

  const singleChangeHandler = (date) => {
    setDate(date ? moment(date) : null);
  };

  const focusHandler = (focusedInput) => {
    setFocusedInput(focusedInput);
  };

  const startDateString = dates.startDate
    ? dates.startDate.format("DD.MM.YYYY")
    : "DD.MM.YYYY";
  const endDateString = dates.endDate
    ? dates.endDate.format("DD.MM.YYYY")
    : "DD.MM.YYYY";
  const dateString = date ? date.format("DD.MM.YYYY") : "DD.MM.YYYY";

  const CustomMonthNav = ({ left }) => {
    return (
      <>
        <Icon
          path={left ? mdiArrowLeft : mdiArrowRight}
          size={1.5}
          color={"#BC9CFF"}
        />
      </>
    );
  };

  const BottomPanel = () => {
    return (
      <div className="dp--bottomPanel d-flex justify-content-between px-4 pb-4">
        <div
          className="dp--button"
          onClick={() => {
            setDates({ startDate: null, endDate: null });
          }}
        >
          clear
        </div>
        <div
          className="dp--button"
          onClick={() => {
            focusHandler(null);
          }}
        >
          apply
        </div>
      </div>
    );
  };

  const InputRangeDouble = () => {
    return (
      <>
        <Col className="col-12 col-sm-6 mb-2">
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
      </>
    );
  };

  const InputRangeSingle = () => {
    return (
      <>
        <Col className="col-12">
          <h4>dates of stay</h4>
          <input
            className="dp--input form-control"
            type="text"
            name="start date"
            value={`${startDateString}-${endDateString}`}
            readOnly
            onClick={() => {
              focusHandler("startDate");
            }}
            placeholder="DD.MM.YYYY"
          />
        </Col>
      </>
    );
  };

  const InputDateSingle = () => {
    return (
      <>
        <input
          className="dp--input form-control"
          type="text"
          name="start date"
          value={`${dateString}`}
          readOnly
          onClick={() => {
            focusHandler("startDate");
          }}
          placeholder="DD.MM.YYYY"
        />
      </>
    );
  };

  const InputDate = () => {
    switch (type) {
      case "rangeDouble": {
        return <InputRangeDouble />;
      }
      case "rangeSingle": {
        return <InputRangeSingle />;
      }
      default:
      // return <InputDateSingle />;
    }
  };

  const Range = () => {
    <DateRangePicker
      startDateId="startDateId"
      endDateId="endDateId"
      minimumNights={1}
      startDate={dates.startDate}
      endDate={dates.endDate}
      onDatesChange={({ startDate, endDate }) =>
        changeHandler({ startDate, endDate })
      }
      focusedInput={focusedInput}
      onFocusChange={(focusedInput) => focusHandler(focusedInput)}
      numberOfMonths={1}
      hideKeyboardShortcutsPanel
      firstDayOfWeek={1}
      navPrev={<CustomMonthNav left />}
      navNext={<CustomMonthNav right />}
      renderCalendarInfo={() => {
        return <BottomPanel />;
      }}
    />;
  };

  const Single = () => {
    return (
      <SingleDatePicker
        date={dates.startDate}
        onDatesChange={singleChangeHandler}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => focusHandler(focusedInput)}
        numberOfMonths={1}
        hideKeyboardShortcutsPanel
        firstDayOfWeek={1}
        navPrev={<CustomMonthNav left />}
        navNext={<CustomMonthNav right />}
        // renderCalendarInfo={() => {
        //   return <BottomPanel />;
        // }}
      />
    );
  };

  const DatePicker = () => {
    switch (type) {
      case ("rangeDouble", "rangeSingle"): {
        console.log(type);
        return <Range />;
      }
      default:
        console.log(type);
        return <Single />;
    }
  };

  return (
    <>
      <div className="dp">
        <Row>
          <InputDate />
        </Row>
        {/* <DateRangePicker
          startDateId="startDateId"
          endDateId="endDateId"
          minimumNights={1}
          startDate={dates.startDate}
          endDate={dates.endDate}
          onDatesChange={({ startDate, endDate }) =>
            changeHandler({ startDate, endDate })
          }
          focusedInput={focusedInput}
          onFocusChange={(focusedInput) => focusHandler(focusedInput)}
          numberOfMonths={1}
          hideKeyboardShortcutsPanel
          firstDayOfWeek={1}
          navPrev={<CustomMonthNav left />}
          navNext={<CustomMonthNav right />}
          renderCalendarInfo={() => {
            return <BottomPanel />;
          }}
        /> */}
        <DatePicker />
      </div>
    </>
  );
}
