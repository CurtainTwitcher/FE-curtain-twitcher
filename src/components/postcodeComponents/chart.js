import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./Graph.css";
import _ from "underscore";

const Chart = props => {
  let array = [];

  props.data.map(crime => {
    return array.push([crime.crimeType]);
  });

  let crimes = _.flatten(array).reduce((acc, item, i) => {
    acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1);
    return acc;
  }, {});

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

  return (
    <div
      style={{
        boxSizing: `border-box`,
        width: `70%`,
        height: `45%`,
        marginTop: `27px`,
        padding: `0 12px`,
        outline: `none`,
        marginLeft: `15%`
      }}
    >
      <h2>Recent Crimes in your area</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default Chart;
