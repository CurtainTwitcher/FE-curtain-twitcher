import React from "react";
import CrimeList from "./postcodeComponents/CrimeList";
import Chart from "./postcodeComponents/chart";
import TrendGraph from "./postcodeComponents/TrendGraph";
import MyMapComponent from "./postcodeComponents/googleMap";
import "./PostcodePage.css";

class PostcodePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crimeType: ''
    };
    this.filterCrimeTypes = this.filterCrimeTypes.bind(this);
  }

  componentDidMount() {
    this.props.fetchPostcodes(this.props.postcode);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.postcode !== nextProps.postcode) {
      this.props.fetchPostcodes(this.props.postcode);
    }
  }

  filterCrimeTypes (crimeType) {
    this.setState({crimeType});
    console.log('CRIME', crimeType);
  }

  filterCrimes(arr) {
    return arr.filter(crime => crime.crimeType.includes(this.state.crimeType))
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
            data={this.filterCrimes(this.props.data)}
          />
        </div>
        <br />
        <div className="container">
          <CrimeList crimeType={this.state.crimeType} data={this.props.data} filterCrimeTypes={this.filterCrimeTypes} />
        </div>
        <span style={{ marginLeft: "20%" }}>
          <Chart data={this.props.data} />
        </span>
        <br />
        <br />
        <div className="container" style={{ marginBottom: `200px` }}>
          <p />
          <TrendGraph data={this.props.data} />
        </div>
      </div>
    );
  }
}

export default PostcodePage;
