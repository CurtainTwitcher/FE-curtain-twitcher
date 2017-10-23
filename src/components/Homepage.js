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
        <form  onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            onChange={this.handleFormChange}
          />
        </form>
        {this.state.postcodeResults ? 
        <PostcodePage /> 
         : null }
        
        <p className="App-intro">
          Enter your <strong>postcode</strong> to start
        </p>
      </div>
          
    );
  }
}

export default Homepage;
