import React from "react";

import "./InvalidPostcode.css";


const InvalidPostcode = props => {
  return (
    <div className="background">
      <br />
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
      <span className="sr-only">Loading...</span>

      <p>INVALID POSTCODE, please enter a valid POSTCODE to begin</p>

    </div>
  );
};

export default InvalidPostcode;
