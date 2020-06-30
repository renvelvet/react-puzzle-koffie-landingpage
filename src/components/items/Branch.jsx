import React from "react";
import "./Branch.css";
import branch1 from "../branch1.jpg";
import branch3 from "../branch3.jpg";
import branch4 from "../branch4.jpg";
import branch5 from "../branch5.jpg";
import branch6 from "../branch6.jpg";
function Branch() {
  return (
    <div className="branch">
      <div className="branch-photos">
        <img src={branch1} id="shop1" alt="shop1" />
      </div>
      <div className="branch-photos">
        <img src={branch3} id="shop3" alt="shop3" />
      </div>
      <div className="branch-photos">
        <img src={branch4} id="shop4" alt="shop4" />
      </div>
      <div className="branch-photos">
        <img src={branch5} id="shop5" alt="shop5" />
      </div>
      <div className="branch-photos">
        <img src={branch6} id="shop6" alt="shop6" />
      </div>
    </div>
  );
}

export default Branch;
