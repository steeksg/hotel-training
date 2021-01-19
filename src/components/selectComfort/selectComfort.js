import React, { useState, useEffect } from "react";

import CustomSelect from "../customSelect/customSelect";

export default function SelectComfort() {
  const [countBedrooms, setCountBedrooms] = useState(0);
  const [countBed, setCountBed] = useState(0);
  const [countBathrooms, setCountBathrooms] = useState(0);
  const [value, setValue] = useState("Optional");

  const data = [
    { name: "bedrooms", count: countBedrooms, setCount: setCountBedrooms },
    { name: "beds", count: countBed, setCount: setCountBed },
    { name: "bathrooms", count: countBathrooms, setCount: setCountBathrooms },
  ];

  useEffect(() => {
    let allComfort = "";

    if (!!countBedrooms) {
      allComfort += countBedrooms + " bedrooms";
    }

    if (!!countBed) {
      allComfort += (!!countBedrooms ? ", " : "") + countBed + " bed";
    }

    if (!!countBathrooms) {
      if (!!countBedrooms && !!countBed) {
        allComfort += ", ...";
      } else {
        allComfort +=
          (!!countBedrooms || !!countBed ? ", " : "") +
          countBathrooms +
          " bathrooms";
      }
    }

    setValue(!!allComfort ? allComfort : "Optional");
  }, [countBedrooms, countBed, countBathrooms]);

  return <CustomSelect data={data} value={value} />;
}
