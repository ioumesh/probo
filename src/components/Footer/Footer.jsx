import React from "react";
import "./Footer.css"; 

const footerData = {
  menus: [
    {
      title: "Company",
      submenus: ["About Us", "Culture"],
    },
    {
      title: "Resources",
      submenus: ["Help Centre", "Contact Support"],
    },
    {
      title: "Careers",
      submenus: ["Open Roles"],
    },
    {
      title: "Contact Us",
      details: [
        "Registered Office: 8th Floor, Paras Downtown, Golf Course Road, Sector 53, Gurugram 122002, Haryana",
        "communication@probo.in",
        "help@probo.in",
      ],
    },
  ],
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {footerData.menus.map((menu, index) => (
          <div key={index} className="footer-section">
            <h4>{menu.title}</h4>
            {menu.submenus ? (
              <ul>
                {menu.submenus.map((submenu, idx) => (
                  <li key={idx}>{submenu}</li>
                ))}
              </ul>
            ) : (
              <address>
                {menu.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </address>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
