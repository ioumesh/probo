import React from "react";
import "./matchcard.css";
const MatchCard = ({ match }) => {
  const matchValue = match.split("-");
  return (
    <>
      <h1>{`${matchValue[0]}v${matchValue[1]}`}</h1>
      <div className="matchcard-container">
        <div className="matchcard-info">
          <img
            style={{ width: "42px", height: "42px" }}
            src="/images/flag.png"
            alt="flag"
          />
          <span>{matchValue[0]}</span>
        </div>
        <div className="matchcard-info">
          <span>{`${matchValue[0]}v${matchValue[1]}`}</span>
          <span>All your favourite events are right here!</span>
        </div>
        <div className="matchcard-info">
          <img
            style={{ width: "42px", height: "42px" }}
            src="/images/flag.png"
            alt="flag"
          />
          <span>{matchValue[1]}</span>
        </div>
      </div>
    </>
  );
};

export default MatchCard;
