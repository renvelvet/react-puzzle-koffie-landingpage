import React from "react";
import wifi from "../wifi.jpg";
import cozy from "../cozy.jpg";
import affordable from "../affordable.jpg";
import "./Offer.css";
import "./Offer.mobile.css";

function Offer() {
  return (
    <div className="offer">
      <div className="list-photos">
        <img className="photo" src={wifi} alt="wifi" />
        <h3>Wi-fi Gratis</h3>
      </div>
      <div className="list-photos">
        <img className="photo" src={cozy} alt="cozy" />
        <h3 id="tambah-margin">Cozy Place</h3>
      </div>
      <div className="list-photos">
        <img className="photo" src={affordable} alt="Affordable" />
        <h3>Affordable Price</h3>
      </div>
    </div>
  );
}

export default Offer;
