import React from "react";

import "./donutChart.scss";

export default function DonutChart(props) {
  const example = { great: 10, good: 20, acceptable: 50, bad: 20 };
  const {great, good, acceptable, bad} = example;
  return (
    <div class="canvas">
      <svg class="donutChart" width="500" height="500" viewBox="0 0 50 50">
        <circle
          style={{ strokeDasharray: `${great} 100` }}
          class="donutChart--unit donutChart--great"
          r="15.9"
          cx="50%"
          cy="50%"
        ></circle>
        <circle
          style={{ strokeDasharray: `${good} 100`, strokeDashoffset: "-10" }}
          class="donutChart--unit donutChart--good"
          r="15.9"
          cx="50%"
          cy="50%"
        ></circle>
        <circle
          style={{
            strokeDasharray: `${acceptable} 100`,
            strokeDashoffset: "-30",
          }}
          class="donutChart--unit donutChart--acceptable"
          r="15.9"
          cx="50%"
          cy="50%"
        ></circle>
        <circle
          style={{ strokeDasharray: `${bad} 100`, strokeDashoffset: "-80" }}
          class="donutChart--unit donutChart--bad"
          r="15.9"
          cx="50%"
          cy="50%"
        ></circle>
      </svg>
    </div>
  );
}
