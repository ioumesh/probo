import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isFooter=true }) => {
  return (
    <nav className={isFooter?"navbar":"navbar-footer"}>
      <div className="navbar-content">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img
              src="https://probo.in/_next/static/media/logo.b8a0a3e7.webp"
              alt="logo"
            />
          </Link>
          {isFooter && (
            <>
              <Link to="/events">Trade</Link>
              <Link to="/read">Read</Link>
              <Link to="/cares">Probo Cares</Link>
              <Link to="/careers">Careers</Link>
            </>
          )}
        </div>
        <div className="navbar-right">
          <span className="age-warning">For 18 years and above only</span>
          <button className="button">Download App</button>
          <button className="button">Login/Signup</button>
          <i className="icon-settings">Icon</i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
