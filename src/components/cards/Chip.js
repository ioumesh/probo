import React from "react";
import "./card.css";
const Chip = ({ icon, teamA, teamB }) => {
  return (
    <div className="chip">
      <img src={icon} alt="icon" />
      <span className="chip-text">{`${teamA} v ${teamB}`}</span>
    </div>
  );
};

export default Chip;
