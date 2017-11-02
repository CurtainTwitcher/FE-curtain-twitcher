import React from "react";
import { Line } from "react-chartjs-2";

const TrendGraph = props => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August"
    ],
    datasets: props.dataSets
  };

  return (
    <div
      style={{
        boxSizing: `border-box`,
        width: `100%`,
        height: `45%`,
        marginTop: `27px`,
        padding: `0 12px`,
        outline: `none`,
        marginLeft: `0`
      }}
    >
      <h2>Crime Trends in your area (00's)</h2>
      <p />
      <Line data={data} />
    </div>
  );
};

export default TrendGraph;
