import React from "react";
import {Line} from 'react-chartjs-2';
import schoolData from './schoolData';

let schoolTrend = [];
let schoolName;
const trends = TrendsDummy.map(crime => {
  schoolName = name.schoolName;
  schoolTrend.push({[schoolName]: Object.values(crime).slice(1)});
});

const dataSetData = schoolTrend.map((crime, i) => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return {
    label: Object.keys(crime)[0],
    fill: false,
    lineTension: 0.1,
    backgroundColor: `rgba(${red},${green},${blue},0.8)`,
    borderColor: `rgba(${red},${green},${blue},1)`,
    borderCapStyle: 'round',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: `rgba(${red},${green},${blue},1)`,
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: `rgba(${red},${green},${blue},1)`,
    pointHoverBorderColor: `rgba(${red},${green},${blue},1)`,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: Object.values(crime)[0]
  }
})

const data = {
  labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
  datasets: dataSetData
};
const TrendGraph=(props) => {
  return (
    <div style={{
      boxSizing: `border-box`,
      width: `100%`,
      height: `45%`,
      marginTop: `27px`,
      padding: `0 12px`,
      outline: `none`,
      marginLeft: `0`
    }}>
      <h2>Crime Trends in your area (00's)</h2>
      <p></p>
      <Line data={data} />
    </div>

  );
}

export default schoolData;