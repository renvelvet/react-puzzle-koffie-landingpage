import React from "react";
import "./Content.css";
import BlockOffer from "./BlockOffer";
import BlockBranch from "./BlockBranch";
import BlockFooter from "./BlockFooter";
function Content() {
  return (
    <div className="content">
      <BlockOffer />
      <BlockBranch />
      <BlockFooter />
    </div>
  );
}

export default Content;
