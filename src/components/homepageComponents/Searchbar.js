import React from "react";

const SearchBar = props => {
  return (
    <div >
      <div className="container">
        <h2>What We Do</h2>
          <br />
          <p>Curtain Twitcher pulls together in-depth information about crimes and schools across the United Kingdom. 
          With extra features in development our aim is to in you everything you need to know about your area, whether you are looking to buy, 
          rent or are just being a little bit of a curtain twitcher! Best of all, our service is completely free - just enter a postcode 
          below to have a nosey about.</p>
            </div>
    <form onSubmit={props.handleFormSubmit}>
      <input
        type="text"
        onChange={props.handleFormChange}
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `40%`,
          height: `32px`,
          marginTop: `2.5%`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`
        }}
        value={props.postcode}
        placeholder="Enter Postcode to start"
      />
    </form>
    </div>
  );
};

export default SearchBar;
