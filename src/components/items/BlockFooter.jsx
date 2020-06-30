import React from "react";
import "./BlockFooter.css";
import ListFooter from "./ListFooter";
import Maps from "./Maps";
function BlockFooter() {
  return (
    <div className="block-footer" id="findus">
      <ListFooter />
      <Maps />
    </div>
  );
}

export default BlockFooter;
