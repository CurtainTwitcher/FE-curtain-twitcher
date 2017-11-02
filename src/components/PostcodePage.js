import React from "react";
import CrimeList from "./postcodeComponents/CrimeList";
import Chart from "./postcodeComponents/chart";
import TrendGraph from "./postcodeComponents/TrendGraph";
import MyMapComponent from "./postcodeComponents/googleMap";
import "./PostcodePage.css";

class PostcodePage extends React.Component {
  // componentDidMount() {
  //   this.props.fetchPostcodes(this.props.postcode);
  // }

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
          Showing results for recent crimes near:{" "}
          <strong>{this.props.postcode}</strong>
        </h3>
        <div className="container">
          <p>
          The crime data on this website has been taken from the Home Office on behalf of the police forces in England and Wales, 
          Northern Ireland and the British Transport police. Data is submitted for publication on behalf of the data owner, the Chief Constable, of the respective force for which the data relates. 
          Note crime data is two months behind
          </p>
        </div>
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
