import React from "react";

const HeadingTab = props => {
  return (
    <div className="container">

      <ul
        className="nav nav-pills mb-3 justify-content-end"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link active bg-dark"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            onClick={props.onSubmit}
          >
            Crimes
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
            onClick={props.handleSchools}
          >
            Schools
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
         
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
      
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          ...
        </div>
      </div>
    </div>
  );
};

export default HeadingTab;
