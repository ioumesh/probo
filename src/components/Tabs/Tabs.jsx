import React, { useState, useRef } from "react";
import Section from "./Section";
import "./Tabs.css";
import Chip from "../cards/Chip";
import MatchCard from "../cards/MatchCard";
import TradeCard from "../cards/TradeCard";
import { tradeData } from "../data/data";
import { useNavigate } from "react-router-dom";

const tabData = [
  {
    icon: "https://probo.gumlet.io/image/upload/probo_product_images/Cricket@3x.png",
    name: "Cricket",
    view: "cricket",
  },
  {
    icon: "/images/bitcoin.png",
    name: "Bitcoin",
    view: "bitcoin",
  },
  {
    icon: "/images/youtube.png",
    name: "YouTube",
    view: "youtube",
  },
  {
    icon: "https://probo.gumlet.io/image/upload/probo_product_images/News@3x.png",
    name: "News",
  },
  {
    icon: "/images/stocks.png",
    name: "Stocks",
  },
  {
    icon: "https://probo.gumlet.io/image/upload/probo_product_images/Football@3x.png",
    name: "Football",
  },
  {
    icon: "https://probo.gumlet.io/image/upload/probo_product_images/NBA@3x.png",
    name: "Basketball",
    view: "basketball",
  },
  {
    icon: "https://probo.gumlet.io/image/upload/probo_product_images/Chess@3x.png",
    name: "Chess",
  },
  {
    icon: "https://probo.gumlet.io/image/upload/probo_product_images/NewTag.png",
    name: "New on Probo",
  },
  {
    icon: "https://probo.gumlet.io/image/upload/probo_product_images/ExpiringSoon.png",
    name: "Expiring Soon",
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);
  const navigate = useNavigate();

  const handleRoutes = (url) => {
    navigate(`/events/${url}`);
  };

  const scrollToSection = (index) => {
    const section = document.getElementById(tabData[index].name);
    if (section) {
      const offsetTop = section.offsetTop - 100; // Adjust this value as needed
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const CricketComponent = () => {
    const cricketData = tradeData.filter((item) => item.view === "cricket");
    return (
      <>
        <>
          <div className="cricket-view-chip">
            {cricketData[0].teams.map((item, index) => {
              return (
                <Chip
                  key={`chip-${index}`}
                  icon={item.icon}
                  teamA={item.teamA}
                  teamB={item.teamB}
                  handler={() => handleRoutes(`${item.teamA}-${item.teamB}`)}
                />
              );
            })}
          </div>
          <div className="cricket-view-matchcard">
            {cricketData[0].vsTeam.map((item, index) => {
              return (
                <MatchCard
                  key={`match-${index}`}
                  teamA={item.teamA}
                  teamB={item.teamB}
                />
              );
            })}
          </div>
        </>
      </>
    );
  };

  const BitcoinComponent = () => {
    const bitcointData = tradeData.filter((item) => item.view === "bitcoin");

    return (
      <>
        <div className="bitcoin-view">
          {bitcointData[0].trade.map((item, index) => {
            return (
              <TradeCard
                key={`trade-${index}`}
                icon={item.icon}
                content={item.content}
                expire={item.expire}
                yesPrice={item.yesPrice}
                noPrice={item.noPrice}
              />
            );
          })}
        </div>
      </>
    );
  };

  const YoutubeComponent = () => {
    const youtubeData = tradeData.filter((item) => item.view === "youtube");

    return (
      <>
        <div className="bitcoin-view">
          {youtubeData[0].trade.map((item, index) => {
            return (
              <TradeCard
                key={`trade-${index}`}
                icon={item.icon}
                content={item.content}
                expire={item.expire}
                yesPrice={item.yesPrice}
                noPrice={item.noPrice}
              />
            );
          })}
        </div>
      </>
    );
  };
  const BasketBallComponent = () => {
    const basketBallData = tradeData.filter(
      (item) => item.view === "basketball"
    );
    return (
      <>
        <>
          <div className="cricket-view-chip">
            {basketBallData[0].teams.map((item, index) => {
              return (
                <Chip
                  key={`chip-${index}`}
                  icon={item.icon}
                  teamA={item.teamA}
                  teamB={item.teamB}
                />
              );
            })}
          </div>
        </>
      </>
    );
  };

  const renderComponent = (viewState) => {
    switch (viewState) {
      case "cricket":
        return <CricketComponent />;
      case "bitcoin":
        return <BitcoinComponent />;
      case "youtube":
        return <YoutubeComponent />;
      case "basketball":
        return <BasketBallComponent />;
      default:
        return <div>No component found for the current view.</div>;
    }
  };

  return (
    <div>
      <div className="tab-buttons" ref={tabsRef}>
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={activeTab === index ? "active" : ""}
            onClick={() => {
              setActiveTab(index);
              scrollToSection(index);
            }}
          >
            <img src={tab.icon} alt={tab.name} />
            <span className="tab-name">{tab.name}</span>
          </button>
        ))}
      </div>
      <div className="sections">
        {tabData.map((tab, index) => (
          <Section key={index} id={tab.name} title={tab.name} icon={tab.icon}>
            {renderComponent(tab.view)}
          </Section>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
