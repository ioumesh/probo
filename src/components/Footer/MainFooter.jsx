import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import PartnershipSection from "./PartnershipSection";
import SocialMedia from "./SocialMedia";
import LegalFooter from "./LegalFooter";

const MainFooter = () => {
  return (
    <div>
      <Navbar isFooter={false} />
      <Footer />
      <PartnershipSection />
      <SocialMedia />
      <LegalFooter />
    </div>
  );
};

export default MainFooter;
