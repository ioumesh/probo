import React, { useState, useRef } from "react";
import Section from "./Section";
import "./Tabs.css";

const tabData = [
  {
    icon: "https://probo.gumlet.io/image/upload/probo_product_images/Cricket@3x.png",
    name: "Cricket",
  },
  {
    icon: "/images/bitcoin.png",
    name: "Bitcoin",
  },
  {
    icon: "/images/youtube.png",
    name: "YouTube",
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

  const scrollToSection = (index) => {
    const section = document.getElementById(tabData[index].name);
    if (section) {
      const offsetTop = section.offsetTop - 100; // Adjust this value as needed
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
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
            {/* Add content for each section here */}
          </Section>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
