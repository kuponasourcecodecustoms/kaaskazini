import React from "react";
import "./Social.css";

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
            <a href="https://www.tiktok.com/@kaaskazini" aria-label="TikTok">
              <span className="social__social-icon" aria-hidden="true">♪</span>
              <span>TikTok</span>
            </a>
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <span className="social__social-icon social__social-icon--facebook" aria-hidden="true">f</span>
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/kaaskazini/" aria-label="Instagram">
              <span className="social__social-icon" aria-hidden="true">◎</span>
              <span>Instagram</span>
            </a>
            <a href="mailto:kaaskazini@gmail.com" aria-label="Email Kaaskazini">
              <span className="social__social-icon" aria-hidden="true">@</span>
              <span>Email</span>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Social;
