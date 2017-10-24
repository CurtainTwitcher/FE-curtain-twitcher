import React from "react";
import { Pie } from "react-chartjs-2";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

  render() {
    return (
      <div>
        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default Graph;
