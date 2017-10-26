import React from "react";
import CrimeList from "./postcodeComponents/CrimeList";
import Chart from "./postcodeComponents/chart";
import TrendGraph from "./postcodeComponents/TrendGraph";
import MyMapComponent from "./postcodeComponents/googleMap";

class PostcodePage extends React.Component {
  constructor(props) {
    super(props);
  }
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
      <div className="container-fluid">
        <h1>POSTCODE</h1>
        <MyMapComponent
          isMarkerShown
          longitude={this.props.longitude}
          latitude={this.props.latitude}
        />
        <section className="CrimesList">
          <CrimeList />
        </section>
        <section className="Crime Graph">
          <Chart />
        </section>
        <section className="Crime Graph">
          <TrendGraph />
        </section>
      </div>
    );
  }
}

export default PostcodePage;
