import React from "react";
import SchoolChartList from "./schoolComponents/schoolList";
import Chart from "./postcodeComponents/chart";
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
            data = {this.props.data}
          />
        </div>
        <br />
        <div className="container">
          {<SchoolChartList />}
        </div>
        <div className="box" style={{ marginLeft: "20%" }}>
          {/* <Chart /> */}
        </div>
        <br />
        <br />
        <div className="container" style={{ marginBottom: `200px` }}>
        {/* {<TrendGraph />} */}
        <h1>Ofsted score Grades</h1>
          <b>Grade 1 : Outstanding</b>
          <p>An outstanding school is highly effective in delivering outcomes that provide exceptionally well for all its pupils’ needs. This ensures that pupils are very well equipped for the next stage of their education, training or employment.</p>
          <b>Grade 2 : Good</b>
          <p>A good school is effective in delivering outcomes that provide well for all its pupils’ needs. Pupils are well prepared for the next stage of their education, training or employment.</p>
          <b>Grade 3 : Requires improvement</b>
          <p>A school that requires improvement is not yet a good school, but it is not inadequate. This school will receive a full inspection within 24 months from the date of this inspection.</p>
          <b>Grade 4 : Inadequate</b>
          <p>A school that has serious weaknesses is inadequate overall and requires significant improvement but leadership and management are judged to be Grade 3 or better. This school will receive regular monitoring by Ofsted inspectors. A school that requires special measures is one where the school is failing to give its pupils an acceptable standard of education and the school’s leaders, managers or governors have not demonstrated that they have the capacity to secure the necessary improvement in the school. This school will receive regular monitoring by Ofsted inspectors.</p>
        </div>
      </div>
    );
  }
}

export default SchoolPage;
