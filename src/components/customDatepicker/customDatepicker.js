import React, {useState} from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { enGB } from "date-fns/locale";

import "./customDatepicker.scss";

registerLocale("enGB", enGB);

export default function CustomDatepicker({
  selectsStart,
  selectsEnd,
  startDate,
  endDate,
  onChange,
}) {
  const clearDates = () => {
    onChange(null, "start");
    onChange(null, "end");
  };


  const [open, setOpen] = useState(null);

  const applyHandler = () => {
    let event = new Event("handleCalendarClickOutside");
    document
      .getElementsByClassName("react-datepicker-ignore-onclickoutside")[0]
      .dispatchEvent(event);

    //   document.getElementsByClassName("react-datepicker-popper")[0].removeAttribute('data-show')
    setOpen(false);
  };

  return (
    <DatePicker
    open={open}
      locale="enGB"
      selectsStart={selectsStart}
      selectsEnd={selectsEnd}
      placeholderText="DD.MM.YYYY"
      dateFormat="dd.MM.yyyy"
      selected={selectsStart ? startDate : endDate}
      onChange={
        selectsStart
          ? (date) => onChange(date, "start")
          : (date) => onChange(date, "end")
      }
      startDate={startDate}
      endDate={endDate}
      minDate={selectsStart ? new Date() : Math.max(new Date(), startDate)}
    >
      <div className="buttonLine ">
        <div className="buttonLine--clear" onClick={clearDates}>
          clear
        </div>
        <div className="buttonLine--apply" onClick={applyHandler}>
          apply
        </div>
      </div>
    </DatePicker>
  );
}
