import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              src="https://i.im.ge/2023/05/28/hhn0Uf.sports2-removebg-preview-1.png"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            <b>
              <em>Sports-Hits</em>
            </b>
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search News..."
              aria-label="Search"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="btn btn-outline-dark"
              type="submit"
              onClick={(e) => setSubmit(searchText)}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
