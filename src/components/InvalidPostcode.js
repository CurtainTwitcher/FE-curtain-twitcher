import React from "react";

const InvalidPostcode = props => {
  return (
    <div>
      <br />
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw" />
      <span class="sr-only">Loading...</span>
      <p>INVALID POSTCODE, check your facts!!!</p>
    </div>
  );
};

export default InvalidPostcode;
