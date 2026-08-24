import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Manifesto from "./components/Manifesto";
import CityGrid from "./components/CityGrid";
import EventImages from "./components/EventImages";
import Social from "./components/Social";
import Footer from "./components/Footer";
import { CAROUSEL_IMAGES } from "./data/images";

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Events />
        <Manifesto />
        <CityGrid />
        <EventImages images={CAROUSEL_IMAGES} />
        <Social />
      </main>
      <Footer />
    </>
  );
};

export default App;
