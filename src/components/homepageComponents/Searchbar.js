import React from "react";

const SearchBar = props => {
  return (
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <input
          type="text"
          onChange={props.handleFormChange}
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `40%`,
            height: `32px`,
            marginTop: `27px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`
          }}
          value={props.postcode}
        />
      </form>

      <p>
        Enter your <strong>postcode</strong> to start
      </p>
    </div>
  );
};

export default SearchBar;
