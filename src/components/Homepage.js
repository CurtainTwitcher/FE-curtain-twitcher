import React from "react";
import PostcodePage from "./PostcodePage";
import InvalidPostcode from "./InvalidPostcode";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchBar from "./homepageComponents/Searchbar";
import axios from "axios";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: "",
      postcodeResults: false,
      searchbarHome: true,
      badRequest: false,
      longitude: -2.2126309000000194,
      latitude: 53.4807593
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.fetchPostcodes = this.fetchPostcodes.bind(this);

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
          postcodeResults: false
        });
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <Navbar
          onSubmit={this.handleFormSubmit}
          onChange={this.handleFormChange}
          postcode={this.state.postcode}
        />
        <div className="App">
          <br />
          {this.state.searchbarHome ?
            <SearchBar handleFormSubmit={this.handleFormSubmit} handleFormChange={this.handleFormChange} postcode={this.state.postcode} />
           
           : null}
          {this.state.badRequest ? <InvalidPostcode /> : null}
          {this.state.postcodeResults ? (
            <PostcodePage
              fetchPostcodes={this.fetchPostcodes}
              postcode={this.state.postcode}
              longitude={this.state.longitude}
              latitude={this.state.latitude}
            />
          ) : null}
        </div>

      </div>
    );
  }
}

export default Homepage;
