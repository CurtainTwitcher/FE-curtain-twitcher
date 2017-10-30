import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./Graph.css";
import crimes from "../helpers/chartDataCreator";

const data = {
  labels: Object.keys(crimes),
  datasets: [
    {
      data: Object.values(crimes),
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#ff704d",
        "#4d94ff",
        "#ffb84d",
        "#80bfff",
        "#ff4d4d",
        "#ffff4d",
        "#4dd2ff",
        "#4d4dff"
      ],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

const Chart = props => {
  return (
      <div
        style={{
          boxSizing: `border-box`,
          width: `45%`,
          height: `45%`,
          marginTop: `27px`,
          padding: `0 12px`,
          outline: `none`,
          marginLeft: `27%`
        }}>
        <h2>Recent Crimes in your area</h2>
        <Doughnut data={data} />
      </div>
  );
};

export default Chart;
