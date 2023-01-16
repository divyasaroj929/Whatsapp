import React from "react";

import { NavLink } from "react-router-dom";

import PortfolioWebsite from "../Image/PortfolioWebsite.svg";

const About = () => {
  return (
    <>
      <div className="home-page">
        <div className="home-data">
          <p>hi this is me</p>
          <h2>color</h2>
          <p>
            The three primary colors are red, blue and yellow. The three
            secondary colors are green, orange and purple
          </p>
          <button type="button" className="btn">
            <NavLink to="/contact">Hire me</NavLink>
          </button>
        </div>
        <div className="home-icon">
          <img src={PortfolioWebsite} alt="" className="img1" />
        </div>
      </div>
    </>
  );
};
export default About;
