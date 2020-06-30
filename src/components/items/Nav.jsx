import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="navbar">
      <h3>Puzzle Koffie</h3>
      <ul>
        <li>
          <a href="#offers">Offers</a>
        </li>
        <li>
          <a href="#shops">Our Shop</a>
        </li>
        <li>
          <a href="#findus">Find Us</a>
        </li>
        <li>
          <a href="https://puzzle-koffie.business.site/">Official Website</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
