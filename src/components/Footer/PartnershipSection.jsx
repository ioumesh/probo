import React from "react";
import "./PartnershipSection.css"; // Link to the CSS file for styling

const partnershipData = {
  leftContent:
    "Probo’s experience is made possible by our partnerships with TradingView (track upcoming events with Economic Calendar or browse stocks in the Screener), Authbridge for verification technology, DataMuni for data & analytics, Google Firebase, Google Cloud & AWS. Probo is also a member of FICCI and ASSOCHAM.",
  rightContent: [
    "https://probo.in/_next/static/media/trading-view.1be315f8.webp",
    "https://probo.in/_next/static/media/authbridge.a086e69f.webp",
    "https://probo.in/_next/static/media/datamuni.fda1e52a.webp",
    "https://probo.in/_next/static/media/google-cloud.c22895ff.webp",
    "https://probo.in/_next/static/media/google-firebase.561175a4.webp",
  ],
};

const PartnershipSection = () => {
  return (
    <div className="partnership-section">
      <div className="partnership-left">
        <p>{partnershipData.leftContent}</p>
      </div>
      <div className="partnership-right">
        {partnershipData.rightContent.map((image, index) => (
          <img key={index} src={image} alt={`Partnership ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default PartnershipSection;
