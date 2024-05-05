import React from "react";

const TradeCard = ({ icon, expire, content, yesPrice, noPrice }) => {
  const handleYes = () => {
    alert("component is not added ");
  };
  const handleNo = () => {
    alert("component is not added ");
  };
  return (
    <div className="trade-card">
      <div className="trade-img">
        <img src={icon} alt="pic" />
      </div>
      <div className="trade-expire">
        <img src="/images/time.png" alt="time" />
        <span className="trade-expire-text">Expires in {expire} minutes</span>
      </div>
      <p className="trade-content">{content}</p>
      <div className="trade-btn">
        <button onClick={handleYes} className="trade-btn-primary">
          Yes ₹{yesPrice}
        </button>
        <button onClick={handleNo} className="trade-btn-secondary">
          No ₹{noPrice}
        </button>
      </div>
    </div>
  );
};

export default TradeCard;
