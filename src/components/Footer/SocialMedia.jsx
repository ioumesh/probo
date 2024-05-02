import React from "react";
import "./SocialMedia.css";

const SocialMedia = () => {
  const socialMediaLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      icon: "https://probo.in/_next/static/media/linkedin.20fbb25d.webp",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "https://probo.in/_next/static/media/twitter.15ec0c5c.webp",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      icon: "https://probo.in/_next/static/media/instagram.71ea79d8.webp",
    },
    {
      name: "Discord",
      url: "https://discord.com",
      icon: "https://probo.in/_next/static/media/discord.218c8761.webp",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      icon: "https://probo.in/_next/static/media/youtube.313aec8b.webp",
    },
  ];

  return (
    <div className="social-media">
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={link.icon} alt={link.name} title={link.name} />
          <span className="social-name">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
