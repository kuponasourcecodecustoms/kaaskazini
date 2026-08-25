import React from "react";
import "./Social.css";
import emailIcon from "../../data/socials/email.png";
import facebookIcon from "../../data/socials/facebook.png";
import instagramIcon from "../../data/socials/instagram.svg";
import tiktokIcon from "../../data/socials/tiktok.png";

const socialLinks = [
  {
    href: "https://www.tiktok.com/@kaaskazini",
    label: "TikTok",
    icon: tiktokIcon,
  },
  {
    href: "https://www.facebook.com/",
    label: "Facebook",
    icon: facebookIcon,
  },
  {
    href: "https://www.instagram.com/kaaskazini/",
    label: "Instagram",
    icon: instagramIcon,
  },
  {
    href: "mailto:kaaskazini@gmail.com",
    label: "Email",
    icon: emailIcon,
  },
];

const Social: React.FC = () => {
  return (
    <section className="social" id="social">
      <div className="wrap social__panel">
        <div className="social__left">
          <p className="eyebrow social__eyebrow">Be a part of the movement.</p>
          <h2 className="social__title">
            Feel something
            <br />
            before the rest know.
          </h2>
          <p className="social__sub">
            Follow the next gathering, see what happened last time, or reach out
            directly.
          </p>
        </div>

        <div className="social__right">
          <nav className="social__socials" aria-label="Kaaskazini social links">
            {socialLinks.map(({ href, label, icon }) => (
              <a href={href} aria-label={label} key={label}>
                <img className="social__social-icon" src={icon} alt="" aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Social;
