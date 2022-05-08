import React from "react";
import arrow from "../images/arrow.png";

export default function Header() {
  return (
    <header className="header">
      <h1>Random</h1>
      <figure>
        <img src={arrow} alt="loading-arrow" className="arrow-img" />
      </figure>
    </header>
  );
}
