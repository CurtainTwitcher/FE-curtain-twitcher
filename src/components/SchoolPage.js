import React from "react";
import CrimeList from "./postcodeComponents/CrimeList";
import Chart from "./postcodeComponents/chart";
import TrendGraph from "./postcodeComponents/TrendGraph";
import MyMapComponent from "./postcodeComponents/googleMap";

class SchoolPage extends React.Component {
  componentDidMount() {
    this.props.fetchPostcodes(this.props.postcode);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.postcode !== nextProps.postcode) {
      this.props.fetchPostcodes(this.props.postcode);
    }
  }

  render() {
    return (
      <div>
        <h3>
          Showing results for schools near:{" "}
          <strong>{this.props.postcode}</strong>
        </h3>
        <div className="container">
          <MyMapComponent
            isMarkerShown
            longitude={this.props.longitude}
            latitude={this.props.latitude}
          />
        </div>
        <br />
        <div className="container">
          <CrimeList />
        </div>
        <div className="box" style={{ marginLeft: "20%" }}>
          <Chart />
        </div>
        <br />
        <br />
        <div className="container" style={{ marginBottom: `200px` }}>
          <TrendGraph />
        </div>
      </div>
    );
  }
}

export default SchoolPage;
