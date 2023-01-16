import React, { useState } from "react";

import "../StyleComponent/HeaderStyle.css";

import { form, NavLink } from "react-router-dom";

import SubmitFun from "./SubmitFun";

const Contact = () => {
  const [image, setImage] = useState(false);

  function myFUN() {
    console.log("dfh");
    let myname = document.getElementById("myn").value;
    console.log(myname);
    let email = document.getElementById("email").value;

    if (myname == "" || myname == null) {
      alert("must be fulfill");
    }
    if (email == "" || email == null) {
      alert("at least 3 charter");
    } else {
      document.getElementById("myn").value = "";
      document.getElementById("email").value = "";
      // alert("submitted");
      setImage(true);
    }
  }

  // ek component ko function ke ander return kaise karte h//
  if (image === false) {
    return (
      <>
        <div className="container">
          <h2> free use contact page</h2>
          <div className="contect-form">
            <from action="#" mathod="post" className="from">
              <input
                type="text"
                name="username"
                placeholder="username"
                className="input"
                autoComplete="off"
                required
                id="myn"
              ></input>

              <input
                type="text"
                name="email"
                placeholder="email"
                autoComplete="off"
                className="input"
                id="email"
                required
              ></input>

              <textarea
                name="message"
                cols="30"
                rows="6"
                autoComplete="off"
                className="input"
                required
              />
              <button
                className="btn"
                id="submit"
                onClick={() => {
                  myFUN();
                }}
              >
                submit
              </button>
            </from>
          </div>
        </div>
      </>
    );
  }
  return <SubmitFun />;
};
export default Contact;
