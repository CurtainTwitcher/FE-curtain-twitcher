import React from "react";

const Navbar = props => {
  return (
    <div className="App">
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Crimes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Schools
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark justify-content-between">
          <a className="navbar-brand" href="/">
            <img
              src="https://www.imageupload.co.uk/images/2017/10/26/Logomakr_2EyWZI.png"
              width="130"
              height="40"
              alt=""
            />
          </a>

          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
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
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
