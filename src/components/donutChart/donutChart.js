import React from "react";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import "./donutChart.scss";

export default function DonutChart(props) {
  // const example = { great: 20, good: 25, acceptable: 25, bad: 0 };
  const { great, good, acceptable, bad } = props.data;

  const sum = great + good + acceptable + bad;
  const percent = sum / 100;

  const calculatePercent = (value) => {
    return value / percent;
  };

  const percents = {
    great: calculatePercent(great),
    good: calculatePercent(good),
    acceptable: calculatePercent(acceptable),
    bad: calculatePercent(bad),
  };

  //TODO: Create calculate logic and get props

  //TODO: Find and fix place with props
  const SVGDonut = () => {
    return (
      <div className="canvas">
        <svg
          className="donutChart--svg"
          width="150"
          height="150"
          transform="rotate(-90)"
          viewBox="0 0 40 40"
        >
          <defs>
            <linearGradient id="gradientGreat">
              <stop offset="0%" stopColor="#ffe39c"></stop>
              <stop offset="100%" stopColor="#ffba9c"></stop>
            </linearGradient>

            <linearGradient id="gradientGood">
              <stop offset="0%" stopColor="#6fcf97"></stop>
              <stop offset="100%" stopColor="#66d2ea"></stop>
            </linearGradient>

            <linearGradient id="gradientAcceptable">
              <stop offset="0%" stopColor="#bc9cff"></stop>
              <stop offset="100%" stopColor="#8ba4f9"></stop>
            </linearGradient>

            <linearGradient id="gradientBad">
              <stop offset="0%" stopColor="#919191"></stop>
              <stop offset="100%" stopColor="#3d4975"></stop>
            </linearGradient>
          </defs>
          <g>
            <circle
              style={{ strokeDasharray: `${percents.great} 100` }}
              className="donutChart--unit donutChart--great"
              r="15.9"
              cx="50%"
              cy="50%"
              stroke="url(#gradientGreat)"
            ></circle>
            <circle
              style={{
                strokeDasharray: `${percents.good} 100`,
                strokeDashoffset: `${0 - percents.great}`,
              }}
              className="donutChart--unit donutChart--good"
              r="15.9"
              cx="50%"
              cy="50%"
              stroke="url(#gradientGood)"
            ></circle>
            <circle
              style={{
                strokeDasharray: `${percents.acceptable} 100`,
                strokeDashoffset: `${0 - percents.great - percents.good}`,
              }}
              className="donutChart--unit donutChart--acceptable"
              r="15.9"
              cx="50%"
              cy="50%"
              stroke="url(#gradientAcceptable)"
            ></circle>
            <circle
              style={{
                strokeDasharray: `${percents.bad} 100`,
                strokeDashoffset: `${
                  0 - percents.great - percents.good - percents.acceptable
                }`,
              }}
              className="donutChart--unit donutChart--bad"
              r="15.9"
              cx="50%"
              cy="50%"
              stroke="url(#gradientBad)"
            ></circle>
          </g>
        </svg>
      </div>
    );
  };

  const Legend = () => {
    return (
      <ul className="donutChart--legend">
        <li className="donutChart--legendItem donutChart--legendItem-great">
          Great
        </li>
        <li className="donutChart--legendItem donutChart--legendItem-good">
          Good
        </li>
        <li className="donutChart--legendItem donutChart--legendItem-acceptable">
          Acceptable
        </li>
        <li className="donutChart--legendItem donutChart--legendItem-bad">
          Bad
        </li>
      </ul>
    );
  };

  return (
    <Row>
      <Col className="">
        <div className="donutChart--donut">
          <div className="donutChart--title">
            <span className="donutChart--titleCount">{sum}</span>
            <div>votes</div>
          </div>
          <SVGDonut />
        </div>
      </Col>
      <Col className="d-flex align-items-end">
        <div className="donutChart--legend">
          <Legend />
        </div>
      </Col>
    </Row>
  );
}
