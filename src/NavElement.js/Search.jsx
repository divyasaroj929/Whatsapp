import React, { useState } from "react";

import Popup from "./Popup";
import "../StyleComponent/HeaderStyle.css";

const Search = () => {
  const [model, setModel] = useState(false);

  return (
    <>
      <div className="pop">
        <button
          onClick={() => {
            setModel(true);
          }}
        >
          info
        </button>
        {model && <Popup closemodel={setModel} />}
      </div>
    </>
  );
};
export default Search;
