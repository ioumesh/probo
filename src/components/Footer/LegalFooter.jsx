import React from "react";
import "./LegalFooter.css";
import { Link } from "react-router-dom";

const LegalFooter = () => {
  return (
    <div className="legal-footer">
      <div className="legal-links">
        <Link to="/terms-and-conditions">Terms and Conditions</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
      <div className="copyright">
        © 2024 by Probo Media Technologies Pvt. Ltd.
      </div>
    </div>
  );
};

export default LegalFooter;
