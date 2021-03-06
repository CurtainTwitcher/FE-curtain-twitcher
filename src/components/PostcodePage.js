import React from "react";

import CrimeList from "./postcodeComponents/CrimeList";
import TrendGraph from "./postcodeComponents/TrendGraph";
import MyMapComponent from "./postcodeComponents/googleMap";
import "./PostcodePage.css";
import HorizontalSlider from "./sliderComponent/slider";
import "react-rangeslider/lib/index.css";

class PostcodePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crimeType: "",
      trendData: []
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

  filterCrimeTypes(crimeType) {
    this.setState({ crimeType });
  }

  filterCrimes(arr) {
    return this.state.crimeType === "all data"
      ? arr
      : arr.filter(crime => crime.crimeType.includes(this.state.crimeType));
  }

  render() {
    return (
      <div>
        <h3>
          Showing results for recent crimes near:{" "}
          <strong>{this.props.postcode}</strong>
        </h3>
        <div className="container">
          <p style={{ textAlign: "centre" }}>
            The crime data on this website has been taken from the Home Office
            on behalf of the police forces in England and Wales, Northern
            Ireland and the British Transport police. Data is submitted for
            publication on behalf of the data owner, the Chief Constable, of the
            respective force for which the data relates.<br />
            <small>
              <strong>Please Note: crime data is two months behind</strong>
            </small>
          </p>
        </div>

        <div className="mapAndSlider container">
          <div className="map">
            <MyMapComponent
              isMarkerShown
              longitude={this.props.longitude}
              latitude={this.props.latitude}
              data={this.filterCrimes(this.props.data)}
            />
          </div>
          <div className="slider slider-horizontal">
            <br />
            <h5>Slide to increase/decrease crime radius</h5>
            <HorizontalSlider
              value={this.props.value}
              getRadiusValue={this.props.getRadiusValue}
            />
          </div>
        </div>
        <br />
        <div className="container">
          <CrimeList
            crimeType={this.state.crimeType}
            data={this.props.data}
            filterCrimeTypes={this.filterCrimeTypes}
          />
        </div>
        <br />
        <br />
        <div className="container" style={{ marginBottom: `200px` }}>
          <p />
          <TrendGraph dataSets={this.props.dataSets} />
        </div>
      </div>
    );
  }
}

export default PostcodePage;
