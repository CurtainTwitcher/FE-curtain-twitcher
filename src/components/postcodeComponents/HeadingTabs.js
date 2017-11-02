import React from "react";
import './HeadingTabs.css';

const HeadingTab = props => {
  return (
    <div className="container">

      <ul
        className="nav nav-pills mb-3 justify-content-end"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item">
          <button
            className="btn"
            id={props.postcode ? 'act' : 'nonAct'}
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            onClick={props.onSubmit}
          >
            Crimes
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn"
            id={props.school ? 'act' : 'nonAct'}
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
            onClick={props.handleSchools}
          >
            Schools
          </button>
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
        
        </div>
      </div>
    </div>
  );
};

export default HeadingTab;
