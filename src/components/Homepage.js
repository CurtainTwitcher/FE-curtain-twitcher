import React from "react";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: ""
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
    this.setState = {
      postcode: ""
    };
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.handleFormChange}
            onSubmit={this.handleFormSubmit}
          />
        </form>
        <p className="App-intro">
          Enter your <strong>postcode</strong> to start
        </p>
      </div>
    );
  }
}

export default Homepage;
