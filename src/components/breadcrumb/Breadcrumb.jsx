import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./breadcrumb.css";
const Breadcrumb = ({ match }) => {
  const matchValue = match.split("-").join("vs");

  return (
    <nav aria-label="breadcrumb">
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/events/${match}`}>{matchValue}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
