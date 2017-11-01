import React from "react";

const Navbar = props => {
  return (
    <div className="App">
      <div className="pos-f-t">
        <nav className="navbar navbar-dark bg-dark justify-content-between">
        <div className="navbar">
          <a className="navbar-brand" href="/">
            <img
              src="https://www.imageupload.co.uk/images/2017/10/26/Logomakr_2EyWZI.png"
              width="130"
              height="40"
              alt="pair of curtains"
            />
          </a>
          </div>
          <div className="navbar-form navbar-center" role="search">
          {props.postcodeResults || props.schoolResults ? (
            <form className="form-inline" onSubmit={props.onSubmit}>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Postcode"
                aria-label="Search"
                onChange={props.onChange}
                value={props.postcode}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          ) : null}

          </div>
        </nav>


      </div>
    </div>
  );
};

export default Navbar;
