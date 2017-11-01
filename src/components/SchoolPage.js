import React from "react";
import SchoolChartList from "./schoolComponents/schoolList";
import MyMapComponent from "./postcodeComponents/googleMap";
import "./SchoolPage.css"

class SchoolPage extends React.Component {
  componentDidMount() {
    this.props.fetchPostcodes(this.props.postcode);
    this.props.fetchSchools(this.props.longitude, this.props.latitude);
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
            data={this.props.data}
          />
        </div>
        <br />
        <div className="container">
          <h1>Ofsted score Grades</h1>
          <div className="box">
            <div class="row">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-md-3">
                    <div class="well">
                      <h4 class="text-success"><span>Grade 1 : Outstanding</span></h4>An outstanding school is highly effective in delivering outcomes
            that provide exceptionally well for all its pupils’ needs. Pupils are well prepared for the next stage of their education, training or employment.
        </div>
                  </div>
                  <div class="col-md-3">
                    <div class="well">
                      <h4 class="text-success"><span>Grade 2 : Good
            </span></h4><b />A good school is effective in delivering outcomes that provide well
            for all its pupils’ needs. Pupils are well prepared for the next stage of their education, training or employment.
        </div>
                  </div>
                  <div class="col-md-3">
                    <div class="well">
                      <h4 class="text-warning"><span>Grade 3 : Improvement needed</span></h4>A school that requires improvement is not yet a good school, but it
            is not inadequate. This school will receive a full inspection within 24 months from the date of this inspection.
        </div>
                  </div>
                  <div class="col-md-3">
                    <div class="well">
                      <h4 class="text-danger"><span>Grade 4 : Inadequate</span></h4>A school that has serious weaknesses is inadequate overall and
            requires significant improvement but leadership and management are judged to be Grade 3 or better. This school will receive regular monitoring by Ofsted inspectors.
        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <b>Grade 9 : N/A</b>
          <p>Grading is not required for this area of education. </p>
        </div>

        <div className="container">
          <SchoolChartList data={this.props.data} />
        </div>
        <br />
        <br />
        <div className="container" style={{ marginBottom: `200px` }}>
        </div>
      </div>
    );
  }
}

export default SchoolPage;
