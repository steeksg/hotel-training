import React, { useState, useEffect } from "react";

import CustomSelect from "../customSelect/customSelect";

export default function SelectGuests(props) {
  const [value, setValue] = useState("How much guests?");

  const { guests, changeCountGuests } = props;

  const setCountAdult = (newValue) => {
    changeCountGuests(newValue, "adult");
  };
  const setCountChildren = (newValue) => {
    changeCountGuests(newValue, "children");
  };
  const setCountBabies = (newValue) => {
    changeCountGuests(newValue, "babies");
  };

  const data = [
    { name: "adult", count: guests.adult, setCount: setCountAdult },
    { name: "children", count: guests.children, setCount: setCountChildren },
    { name: "babies", count: guests.babies, setCount: setCountBabies },
  ];

  useEffect(() => {
    let countAllGuests = guests.adult + guests.children + guests.babies;

    setValue(
      !!countAllGuests ? `${countAllGuests} guests` : "How much guests?"
    );
  }, [guests.adult, guests.children, guests.babies]);

  return <CustomSelect data={data} value={value} />;
}
