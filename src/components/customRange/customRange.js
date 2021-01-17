import React from "react";

import "./customRange.scss";

export default function CustomRange(props) {
  const { min, max, valueLeft, valueRight, setLeft, setRight } = props;

  const calculatePosLeft = () => {
    const percent = ((valueLeft - min) / (max - min)) * 100;
    return percent;
  };

  const calculatePosRight = () => {
    const percent = ((valueRight - min) / (max - min)) * 100;
    return 100 - percent;
  };

  const handleChangeLeft = (e) => {
    e.target.value <= valueRight && setLeft(e.target.value);
  };

  const handleChangeRight = (e) => {
    e.target.value >= valueLeft && setRight(e.target.value);
  };

  const ThumbLeft = () => {
    return (
      <div
        className="customRange--thumb customRange--thumb-left"
        style={{ left: calculatePosLeft() + "%" }}
      ></div>
    );
  };

  const ThumbRight = () => {
    return (
      <div
        className="customRange--thumb customRange--thumb-right"
        style={{ right: calculatePosRight() + "%" }}
      ></div>
    );
  };

  const Range = () => {
    return (
      <div
        className="customRange--range"
        style={{
          right: calculatePosRight() + "%",
          left: calculatePosLeft() + "%",
        }}
      ></div>
    );
  };

  return (
    <>
      <div className="customRange--wrapper">
        <input
          className="customRange--inputRange"
          type="range"
          id="input-left"
          min={min}
          max={max}
          value={valueLeft}
          onChange={handleChangeLeft}
          onInput={handleChangeLeft}
        />
        <input
          className="customRange--inputRange"
          type="range"
          id="input-right"
          min={min}
          max={max}
          value={valueRight}
          onChange={handleChangeRight}
          onInput={handleChangeRight}
        />

        <div className="customRange--slider">
          <div className="customRange--track"></div>
          <Range />
          <ThumbLeft />
          <ThumbRight />
        </div>
      </div>
    </>
  );
}
