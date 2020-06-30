import React from "react";
import "./Header.css";
import Nav from "./Nav";
import Jumbotron from "./Jumbotron";

function Header() {
  return (
    <div className="header">
      <Nav />
      <Jumbotron />
    </div>
  );
}

export default Header;
