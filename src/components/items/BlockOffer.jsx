import React from "react";
import "./BlockOffer.css";
import Offer from "./Offer";
function BlockOffer() {
  return (
    <div className="block-offer" id="offers" data-aos="fade-left">
      <h1>WHAT WE OFFER</h1>
      <Offer />
    </div>
  );
}

export default BlockOffer;
