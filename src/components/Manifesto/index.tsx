import React from "react";
import "./Manifesto.css";

const PRINCIPLES = [
  {
    label: "Our Aim",
    text: "Kaaskazini aims to push boundaries and introduce a new wave of DJs in the Leeds electronic music scene.",
  },
  {
    label: "Our Sound",
    text:  "We take you on a journey to experience Afrohouse and its different subgenres by featuring tribal house, ancestral house, afrotech and gqom.",
  },
  {
    label: "For You,For Me,For Us",
    text: "This is a space for ALL of us to collectively FEEL SOMETHING.",
  },
];

const Manifesto: React.FC = () => {
  return (
    <section className="manifesto" id="about">
      <div className="wrap manifesto__inner">
        <div className="manifesto__statement">
          <p className="eyebrow">About Kaaskazini</p>
          <h2 className="manifesto__title">
            Founded by Friends with a Similar Vision
          </h2>
          <p className="manifesto__body">
          Started by friends who wanted to create a space for more experimental sets in the realm of African music events in Leeds.
          </p>
        </div>

        <dl className="manifesto__principles">
          {PRINCIPLES.map((p) => (
            <div className="manifesto__principle" key={p.label}>
              <dt>{p.label}</dt>
              <dd>{p.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Manifesto;
