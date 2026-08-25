import React from "react";
import { cities } from "../../data/events";
import "./CityGrid.css";

const CityGrid: React.FC = () => {
  return (
    <section className="cities" id="cities">
      <div className="wrap">
        <p className="eyebrow">Where we've run sessions</p>
        <ul className="cities__grid">
          {cities.map((city) => (
            <li key={city} className="cities__item">
              {city}
            </li>
          ))}
        </ul>

        <p className="cities__note">
          Want Kaaskazini in your city? Tell us where — the list below
          decides where we go next.
        </p>
      </div>
    </section>
  );
};

export default CityGrid;
