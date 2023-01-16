import React from "react";

import "./App.css";

import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

import Header from "./Components/Header";

import Footer from "./Components/Footer";

import Home from "./NavElement.js/Home";
import Contact from "./NavElement.js/Contact";
import About from "./NavElement.js/About";
import Search from "./NavElement.js/Search";
import Error from "./NavElement.js/Error";
import SubmitFun from "./NavElement.js/SubmitFun";

// import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header />
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Error" element={<Error />} />
            <Route path="/SubmitFun" element={<SubmitFun />} />
            {/* <Redirect to="/Contect" element={<Contect />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
