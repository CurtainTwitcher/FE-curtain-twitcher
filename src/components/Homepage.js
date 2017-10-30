import React from "react";
import PostcodePage from "./PostcodePage";
import SchoolPage from "./SchoolPage";
import InvalidPostcode from "./InvalidPostcode";
import Navbar from "./Navbar";
// import Footer from "./Footer";
import SearchBar from "./homepageComponents/Searchbar";
import axios from "axios";
import crimeDummy from "./postcodeComponents/graphDataDummy";
import schoolDummy from "./schoolComponents/schoolData";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: "",
      searchbarHome: true,
      postcodeResults: false,
      schoolResults: false,
      badRequest: false,
      longitude: -2.2126309000000194,
      latitude: 53.4807593,
      crimeData: crimeDummy,
      schoolData: schoolDummy
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSchools = this.handleSchools.bind(this);
    this.fetchPostcodes = this.fetchPostcodes.bind(this);
    this.fetchCrimes = this.fetchCrimes.bind(this);
    this.fetchSchools = this.fetchSchools.bind(this);

  }

  handleFormChange(event) {
    let postcode = event.target.value;
    this.setState({ postcode: postcode.toUpperCase() });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({
      postcodeResults: true,
      searchbarHome: false
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

  fetchCrimes() {
    // axios.get().then(res => {
    //   console.log(res.data)
    // this.setState({
    //   crimeData: res.data 
    // })
    // })
    //   .catch(err => { console.log(err) })
  } 
  fetchSchools() {
     // axios.get().then(res => {
      // this.setState({
      //   schoolData: res.data 
      // })
    //   console.log(res.data)
    // })
    //   .catch(err => { console.log(err) })
  }

  render() {
    return (
      <div>
        <Navbar
          onSubmit={this.handleFormSubmit}
          onChange={this.handleFormChange}
          postcode={this.state.postcode}
          postcodeResults={this.state.postcodeResults}
          handleSchools={this.handleSchools}
        />
        <div className="App">
          <br />
          {this.state.searchbarHome ? (
            <SearchBar
              handleFormSubmit={this.handleFormSubmit}
              handleFormChange={this.handleFormChange}
              postcode={this.state.postcode}
            />
          ) : null}
          {this.state.badRequest ? <InvalidPostcode /> : null}
          {this.state.postcodeResults ? (
            <PostcodePage
              fetchPostcodes={this.fetchPostcodes}
              postcode={this.state.postcode}
              longitude={this.state.longitude}
              latitude={this.state.latitude}
              data = {this.state.crimeData}
              
            />
          ) : null}
          {this.state.schoolResults ? (
            <SchoolPage
              fetchPostcodes={this.fetchPostcodes}
              postcode={this.state.postcode}
              longitude={this.state.longitude}
              latitude={this.state.latitude}
              data = {this.state.schoolData}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Homepage;
