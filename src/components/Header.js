import React from "react";
import arrow from "../images/arrow.png";

export default function Header(props) {
  return (
    <header className="header">
      <h1>Random</h1>
      <figure onClick={props.handleClick}>
        <img src={arrow} alt="loading-arrow" className="arrow-img" />
      </figure>
    </header>
  );
}
