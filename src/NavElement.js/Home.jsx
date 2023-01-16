import React from "react";

import { NavLink } from "react-router-dom";

import "../StyleComponent/HeaderStyle.css";

import LightBulb from "../Image/LightBulb.svg";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="home-data">
          <p>hi this is me</p>
          <h2>color</h2>
          <p>
            Since the origination of the color wheel by Newton, it has become
            one of the most powerful tools available to artists for explaining
            the relationship between colors.
          </p>
          <button type="button" className="btn">
            <NavLink to="/contact">Hire me</NavLink>
          </button>
        </div>
        <div className="home-icon">
          <img src={LightBulb} alt="" className="img1" />
        </div>
      </div>
    </>
  );
};
export default Home;
