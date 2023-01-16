import React, { useState } from "react";

import "../StyleComponent/HeaderStyle.css";

const Popup = (props) => {
  const [count, setCount] = useState(0);

  const btnFun = () => {
    setCount(count + 1);
  };

  const decFun = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("sorry limile over");
      setCount(0);
    }
  };

  return (
    <>
      <div className="search-container">
        <div className="container-head">
          <div className="para">
            <p>popup</p>
            <button
              onClick={() => {
                props.closemodel(false);
              }}
            >
              x
            </button>
          </div>
          <p>try this popup</p>
          <p>{count}</p>

          <div className="container-middle">
            <button
              className="btn"
              onClick={() => {
                btnFun();
              }}
            >
              continue
            </button>
            <div className="container-middle">
              <button
                className="btn"
                onClick={() => {
                  decFun(0);
                }}
              >
                decrement
              </button>

              <button
                className="btn"
                onClick={() => {
                  props.closemodel(false);
                }}
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Popup;
