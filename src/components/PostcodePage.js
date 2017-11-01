import React from "react";
import CrimeList from "./postcodeComponents/CrimeList";
import Chart from "./postcodeComponents/chart";
import TrendGraph from "./postcodeComponents/TrendGraph";
import MyMapComponent from "./postcodeComponents/googleMap";
import "./PostcodePage.css";

class PostcodePage extends React.Component {
  componentDidMount() {
    // console.log(this.props.longitude, this.props.latitude);
    this.props.fetchPostcodes(this.props.postcode);
    this.props.fetchCrimes(this.props.longitude, this.props.latitude);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.postcode !== nextProps.postcode) {
      this.props.fetchPostcodes(this.props.postcode);
      this.props.fetchCrimes(this.props.longitude, this.props.latitude);
    }
  }

  render() {
    return (
      <div>
        <h3>
          Showing results for recent crimes near:{" "}
          <strong>{this.props.postcode}</strong>
        </h3>
        <div className="container">
          <MyMapComponent
            isMarkerShown
            longitude={this.props.longitude}
            latitude={this.props.latitude}
            data={this.props.data}
          />
        </div>
        <br />
        <div className="container">
          <CrimeList data={this.props.data} />
        </div>
        <span style={{ marginLeft: "20%" }}>
          <Chart />
        </span>
        <br />
        <br />
        <div className="container" style={{ marginBottom: `200px` }}>
          <TrendGraph />
        </div>
      </div>
    );
  }
}

export default PostcodePage;
