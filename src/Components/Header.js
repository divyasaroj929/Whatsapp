import React from "react";

import Navbar from "../Components/Navbar";

import "../StyleComponent/HeaderStyle.css";
const Header = () => {
  return (
    <>
      <div className="header">
        {/* <div className="header-logo"></div> */}
        <Navbar />
      </div>
    </>
  );
};

export default Header;
