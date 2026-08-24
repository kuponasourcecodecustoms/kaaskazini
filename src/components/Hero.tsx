import React from "react";
import { events } from "../data/events";
import "./Hero.css";

const Hero: React.FC = () => {
  const next = events[0];

  return (
    <section className="hero" id="top">
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Experimental & Electronic Afro inspired sets.</p>
          <h1 className="hero__title">
            Feel Something.
            <br />
            KAASKAZINI.
          </h1>
          <p className="hero__sub">
            KAASKAZINI, 
            a brand new club night bringing the sound of African Electronic 
            Music to the heart of Leeds. Expect a journey through Afro-house,
            Afro-tech, GQOM, electronic rhythms and deep global club sounds.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#social">
              Connect with us
            </a>
            <a className="btn btn--ghost" href="#event">
              See upcoming events
            </a>
          </div>
        </div>

        <a className="hero__next" href="#event">
          <span className="eyebrow hero__next-label">Next Event</span>
          <span className="hero__next-city">{next.title}</span>
           <span className="hero__next-meta">{next.venue}</span>
          <span className="hero__next-meta">{next.city}</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
