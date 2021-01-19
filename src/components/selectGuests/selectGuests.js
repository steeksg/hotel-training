import React, { useState, useEffect } from "react";

import CustomSelect from "../customSelect/customSelect";

export default function SelectGuests() {
  const [value, setValue] = useState("How much guests?");
  const [countAdult, setCountAdult] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  const [countBabies, setCountBabies] = useState(0);

  const data = [
    { name: "adult", count: countAdult, setCount: setCountAdult },
    { name: "children", count: countChildren, setCount: setCountChildren },
    { name: "babies", count: countBabies, setCount: setCountBabies },
  ];

  useEffect(() => {
    let countAllGuests = countAdult + countChildren + countBabies;

    setValue(
      !!countAllGuests
        ? `${countAdult + countChildren + countBabies} guests`
        : "How much guests?"
    );
  }, [countAdult, countChildren, countBabies]);

  return <CustomSelect data={data} value={value} />;
}
