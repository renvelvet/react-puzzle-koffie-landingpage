import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="navbar">
      <h3>Puzzle Koffie</h3>
      <ul>
        <li>
          <a href="https://www.gstatic.com/bfe/apps/website/img/h/71194643-coffee-1440.jpg">
            Menu
          </a>
        </li>
        <li>
          <a href="https://www.gstatic.com/bfe/apps/website/img/h/71194643-coffee-1440.jpg">
            Gallery
          </a>
        </li>
        <li>
          <a href="https://www.gstatic.com/bfe/apps/website/img/h/71194643-coffee-1440.jpg">
            Contact
          </a>
        </li>
        <li>
          <a href="https://www.gstatic.com/bfe/apps/website/img/h/71194643-coffee-1440.jpg">
            Testimonials
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
