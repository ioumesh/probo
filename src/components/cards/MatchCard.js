import React from "react";
import "./card.css";
const MatchCard = ({ teamA, teamB }) => {
  const TeamScore = ({ team }) => {
    return (
      <div className="match-score">
        <img src="/images/unflagteam.png" alt="match" />
        <span>{`${team.score}/${team.over}`}</span>
        <span>{team.totalOver}</span>
      </div>
    );
  };
  return (
    <div className="match-card">
      <TeamScore team={teamA} />
      <div className="match-live">
        <span>
          {teamA.team} vs {teamB.team}
        </span>
        <img
          src="https://gumlet-images-bucket.s3.ap-south-1.amazonaws.com/probo_product_images/live_badge.png"
          alt="live"
        />
      </div>
      <TeamScore team={teamB} />
    </div>
  );
};

export default MatchCard;
