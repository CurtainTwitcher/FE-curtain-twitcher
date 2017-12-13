import React from "react";
import PostcodePage from "./PostcodePage";
import SchoolPage from "./SchoolPage";
import InvalidPostcode from "./InvalidPostcode";
import Navbar from "./Navbar";
import SearchBar from "./homepageComponents/Searchbar";
import HeadingTab from "./postcodeComponents/HeadingTabs";
import axios from "axios";
import IntroText from "./homepageComponents/IntroText";
import HomeImage from "./homepageComponents/HomeImage";
import _ from "underscore";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: "",
      searchbarHome: true,
      postcodeResults: false,
      schoolResults: false,
      badRequest: false,
      longitude: "",
      latitude: "",
      crimeData: [],
      schoolData: [],

      searchRadius: 0.25,

      data: [],
      dataSets: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSchools = this.handleSchools.bind(this);
    this.fetchPostcodes = this.fetchPostcodes.bind(this);
    this.fetchSchools = this.fetchSchools.bind(this);
    this.getRadiusValue = _.throttle(this.getRadiusValue, 500).bind(this);
  }

  handleFormChange(event) {
    let postcode = event.target.value;
    this.setState({ postcode: postcode.toUpperCase() });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({
      postcodeResults: true,
      searchbarHome: false,
      schoolResults: false
    });
  }

  handleSchools(event) {
    event.preventDefault();
    this.setState({
      searchbarHome: false,
      postcodeResults: false,
      schoolResults: true
    });
  }

  fetchPostcodes(postcode) {
    axios
      .get(`https://api.postcodes.io/postcodes/${postcode}`)
      .then(response => {
        this.setState({
          badRequest: false,
          longitude: response.data.result.longitude,
          latitude: response.data.result.latitude
        });
      })
      .then(res => {
        axios
          .get(
            `https://curtain-twitcher.herokuapp.com/api/crimes?lng=${
              this.state.longitude
            }&lat=${this.state.latitude}&dis=${this.state.searchRadius}`
          )
          .then(res => {
            this.setState({
              badRequest: false,
              crimeData: res.data
            });
          });
      })
      .then(res => {
        let dataTrend = [];
        let dataSets = [];

        axios
          .get(
            `https://curtain-twitcher.herokuapp.com/api/crimes/trends?lng=${
              this.state.longitude
            }&lat=${this.state.latitude}`
          )
          .then(response => {
            this.setState({
              data: response.data
            });
          })
          .then(res => {
            this.state.data.map(crime => {
              return dataTrend.push({
                [crime.name]: Object.values(crime).slice(1)
              });
            });
            dataSets = dataTrend.map(crime => {
              const red = Math.floor(Math.random() * 256);
              const green = Math.floor(Math.random() * 256);
              const blue = Math.floor(Math.random() * 256);
              return {
                label: Object.keys(crime)[0],
                fill: false,
                lineTension: 0.1,
                backgroundColor: `rgba(${red},${green},${blue},0.8)`,
                borderColor: `rgba(${red},${green},${blue},1)`,
                borderCapStyle: "round",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: `rgba(${red},${green},${blue},1)`,
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: `rgba(${red},${green},${blue},1)`,
                pointHoverBorderColor: `rgba(${red},${green},${blue},1)`,
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: Object.values(crime)[0]
              };
            });
            this.setState({
              dataSets
            });
          });
      })
      .catch(err => {
        this.setState({
          badRequest: true,
          searchbarHome: true,
          postcodeResults: false,
          schoolResults: false
        });
        console.error(err);
      });
  }

  fetchSchools(lng, lat) {
    axios
      .get(
        `https://curtain-twitcher.herokuapp.com/api/schools?lng=${lng}&lat=${lat}`
      )
      .then(res => {
        this.setState({
          schoolData: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getRadiusValue(searchRadius) {
    this.setState({ searchRadius });
    this.fetchPostcodes(this.state.postcode);
  }
  fetchTrends(lng, lat) {
    let dataTrend = [];
    let dataSetData;
    axios
      .get(
        `https://curtain-twitcher.herokuapp.com/api/crimes/trends?lng=${lng}&lat=${lat}`
      )
      .then(res => {
        let trend = res.data
          .map(crime => {
            return dataTrend.push({
              [crime.name]: Object.values(crime).slice(1)
            });
          })
          .then(res => {
            dataSetData = dataTrend.map((crime, i) => {
              const red = Math.floor(Math.random() * 256);
              const green = Math.floor(Math.random() * 256);
              const blue = Math.floor(Math.random() * 256);
              return {
                label: Object.keys(crime)[0],
                fill: false,
                lineTension: 0.1,
                backgroundColor: `rgba(${red},${green},${blue},0.8)`,
                borderColor: `rgba(${red},${green},${blue},1)`,
                borderCapStyle: "round",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: `rgba(${red},${green},${blue},1)`,
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: `rgba(${red},${green},${blue},1)`,
                pointHoverBorderColor: `rgba(${red},${green},${blue},1)`,
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: Object.values(crime)[0]
              }.then(res => {
                console.log("dataSetData", dataSetData);
                this.setState({
                  trendData: dataSetData
                });
              });
            });
          });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <Navbar
          onSubmit={this.handleFormSubmit}
          onChange={this.handleFormChange}
          postcode={this.state.postcode}
          postcodeResults={this.state.postcodeResults}
          schoolResults={this.state.schoolResults}
          handleSchools={this.handleSchools}
        />
        {this.state.postcodeResults || this.state.schoolResults ? (
          <HeadingTab
            handleSchools={this.handleSchools}
            onSubmit={this.handleFormSubmit}
            postcode={this.state.postcodeResults}
            school={this.state.schoolResults}
          />
        ) : null}

        {this.state.searchbarHome ? <HomeImage /> : null}
        <div className="App">
          <br />
          {this.state.badRequest ? <InvalidPostcode /> : null}

          {this.state.searchbarHome ? (
            <SearchBar
              handleFormSubmit={this.handleFormSubmit}
              handleFormChange={this.handleFormChange}
              postcode={this.state.postcode}
            />
          ) : null}
          <br />

          {this.state.searchbarHome && !this.state.badRequest ? (
            <IntroText />
          ) : null}
          <br />

          <div>
            {this.state.postcodeResults ? (
              <PostcodePage
                handleSchools={this.handleSchools}
                onSubmit={this.handleFormSubmit}
                fetchPostcodes={this.fetchPostcodes}
                fetchCrimes={this.fetchCrimes}
                postcode={this.state.postcode}
                longitude={this.state.longitude}
                latitude={this.state.latitude}
                data={this.state.crimeData}
                getRadiusValue={this.getRadiusValue}
                value={this.state.searchRadius}
                dataSets={this.state.dataSets}
              />
            ) : null}
            {this.state.schoolResults ? (
              <SchoolPage
                fetchPostcodes={this.fetchPostcodes}
                fetchSchools={this.fetchSchools}
                postcode={this.state.postcode}
                longitude={this.state.longitude}
                latitude={this.state.latitude}
                data={this.state.schoolData}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
