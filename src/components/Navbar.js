import React from "react";

const Navbar = props => {
  return (
    <div className="App">
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Collapsed content</h4>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark justify-content-between">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
