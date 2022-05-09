import React from "react";
import  straightArrow from "../images/straightarrow.png";

export default function Quote(props) {
  return (
    <main className="quote-container">
      <p className="quote--text">
      {props.text}
      </p>
      <div className="quote--credits-container">
        <div className="quote--credits">
          <h3 className="quote--author">{props.author}</h3>
          <p className="quote--genre">{props.genre}</p>
        </div>
        <figure>
        <img src={straightArrow} alt="next-arrow" className="straight-arrow"/>
        </figure>
      </div>
    </main>
  );
}
