import React from "react";
import PostcodePage from "./PostcodePage";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: "",
      postcodeResults: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    let postcode = event.target.value;
    this.setState({ postcode });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({
      postcode: "",
      postcodeResults: true
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            onChange={this.handleFormChange}
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              marginTop: `27px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`
            }}
          />
        </form>
        <p>
          Enter your <strong>postcode</strong> to start
        </p>

        {this.state.postcodeResults ? <PostcodePage /> : null}
      </div>
    );
  }
}

export default Homepage;
