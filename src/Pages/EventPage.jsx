import React from "react";
import "./home.css";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import { useParams } from "react-router-dom";
import MatchCard from "../components/matchcard/MatchCard";

const EventPage = () => {
  const { match } = useParams();
  return (
    <div className="container">
      <div className="left-section">
        {/* Content for the left section */}
        <Breadcrumb match={match} />
        <MatchCard match={match} />
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

export default EventPage;
