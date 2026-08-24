import React, { useState } from "react";
import "./Nav.css";
import logo from "../data/kaaskazini_logo.jpg";

const LINKS = [
  { label: "Upcoming Events", href: "#event" },
  { label: "About", href: "#about" },
  { label: "Connect With Us", href: "#social" },
];

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <a href="#top" className="nav__mark" aria-label="Kaaskazini home">
          KAASKAZINI
          <img src={logo} alt="Kaaskazini" />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__sheet">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Nav;
