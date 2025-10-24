import React from "react";
import HeaderLink from "./HeaderLink";
function Header() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <a className="navbar-brand" href="home">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="home">
                  HOME <span className="sr-only">(current)</span>
                </a>
              </li>
              <HeaderLink name="ABOUT" />
              <HeaderLink name="PROJECTS" />
              <HeaderLink name="SERVICES" />
              <HeaderLink name="BLOG" />
              <HeaderLink name="PAGES" />
              <HeaderLink name="CONTACT" />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Header;
