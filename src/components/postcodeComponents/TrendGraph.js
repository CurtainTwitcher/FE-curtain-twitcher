import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  { name: "Burglary", Q2: 4000, Q1: 2400, amt: 2400 },
  { name: "Bike Theft", Q2: 3000, Q1: 1398, amt: 2210 },
  { name: "Page C", Q2: 2000, Q1: 9800, amt: 2290 },
  { name: "Page D", Q2: 2780, Q1: 3908, amt: 2000 },
  { name: "Page E", Q2: 1890, Q1: 4800, amt: 2181 },
  { name: "Page F", Q2: 2390, Q1: 3800, amt: 2500 },
  { name: "Other Crimes", Q2: 3490, Q1: 4300, amt: 2100 }
];

const TrendGraph = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Q1"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="Q2" stroke="#82ca9d" />
    </LineChart>
  );
};

export default TrendGraph;
