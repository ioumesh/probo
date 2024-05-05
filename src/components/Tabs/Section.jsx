import React from "react";
import "./Tabs.css";
const Section = ({ id,icon, title, children }) => {
  return (
    <div id={id} className="section">
      <div className="title-wrapper">
        <img className="title-wrapper-icon" src={icon} alt="icon" />
        <h2 className="title">{title}</h2>
        <img
          src="https://probo.in/_next/static/media/bucket-action.31943355.svg"
          alt="arrow"
        />
      </div>
      {children}
    </div>
  );
};

export default Section;
