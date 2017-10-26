import React from "react";
import { Bubble } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 20, y: 25, r: 15 },
        { x: 10, y: 10, r: 15 },
        { x: 30, y: 10, r: 15 },
        { x: 25, y: 20, r: 15 }
      ]
    }
  ]
};

const TrendGraph = props => {
  return (
    <div>
      <Bubble data={data} />
    </div>
  );
};

export default TrendGraph;
