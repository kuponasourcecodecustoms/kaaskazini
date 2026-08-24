import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span className="footer__mark">KAASKAZINI</span>
        <span className="footer__meta">
          © {year} Kaaskazini. Feel Something.
        </span>
        <nav className="footer__links" aria-label="Footer">
          <a href="mailto:kaaskazini@gmail.com">kaaskazini@gmail.com</a>
          <a href="#event">Upcoming Event</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
