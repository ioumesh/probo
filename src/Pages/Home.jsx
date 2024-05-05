import React from "react";
import Tabs from "../components/Tabs/Tabs";
import "./home.css";
const Home = () => {
  return (
    <div className="container">
      <div className="left-section">
        {/* Content for the left section */}
        <Tabs />
      </div>
      <div className="right-section">
        {/* Content for the right section */}
        <img
          src="https://probo.in/_next/static/media/banner.276f59bc.webp"
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Home;
