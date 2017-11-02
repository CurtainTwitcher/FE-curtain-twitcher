import React from "react";
import PostcodePage from "./PostcodePage";
import SchoolPage from "./SchoolPage";
import InvalidPostcode from "./InvalidPostcode";
import Navbar from "./Navbar";
import SearchBar from "./homepageComponents/Searchbar";
import HeadingTab from "./postcodeComponents/HeadingTabs";
import axios from "axios";
import crimeDummy from "./postcodeComponents/graphDataDummy";
import schoolDummy from "./schoolComponents/schoolData";
import IntroText from "./homepageComponents/IntroText";
import HomeImage from "./homepageComponents/HomeImage";
import _ from 'underscore';

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
      searchRadius: 0.25
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
          `https://curtain-twitcher.herokuapp.com/api/crimes?lng=${this.state
          .longitude}&lat=${this.state.latitude}&dis=${this.state.searchRadius}`
        )
        .then(res => {
          console.log('UPDATING STATE', res.data.length)
            this.setState({
              badRequest: false,
              crimeData: res.data
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
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getRadiusValue (searchRadius) {
    this.setState({searchRadius});
    this.fetchPostcodes(this.state.postcode)
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
          {this.state.searchbarHome ? <IntroText /> : null}
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
