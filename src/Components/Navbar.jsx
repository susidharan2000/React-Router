import React,{useEffect} from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  useEffect(() => {
    initMDB({ Dropdown, Collapse });
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <IoReorderThreeOutline />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarCenteredExample"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to="/"
                  activeClassName="active"
                >
                  All
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/fsd"
                  activeClassName="active"
                >
                  FULL STACK DEVELOPMENT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ds" activeClassName="active">
                  DATA SCIENCE
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cs" activeClassName="active">
                  CYBER SECURITY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/career"
                  activeClassName="active"
                >
                  CAREER
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
