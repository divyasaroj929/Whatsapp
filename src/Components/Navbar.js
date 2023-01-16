import React from "react";

import { NavLink } from "react-router-dom";

import "../StyleComponent/HeaderStyle.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" className="a">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="About" className="a">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="contact" className="a">
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink to="Search" className="a">
              Search
            </NavLink>
          </li>

          {/* <li>
            <NavLink to="Error" className="a">
              Error
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/SubmitFun" className="a">
              SubmitFun
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
