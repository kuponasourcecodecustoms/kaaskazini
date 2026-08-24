import React from "react";
import { events } from "../data/events";
import FlipText from "./FlipText";
import "./Events.css";

const Events: React.FC = () => {
  return (
    <section className="event" id="event">
      <div className="wrap">
        <div className="event__head">
          <div>
            <p className="eyebrow">Upcoming — updated weekly</p>
            <h2 className="event__title">Upcoming Events</h2>
          </div>
          <p className="event__note">
            We welcome you to a celebration of rhythm, movement, and culture. Whether
            you're a seasoned listener or only discovering the genre, come groove with us!!
          </p>
        </div>

        <div className="event__panel" role="table" aria-label="Upcoming Kaaskazini events">
          <div className="event__row event__row--head" role="row">
            <span role="columnheader">Session</span>
            <span role="columnheader">Location</span>
            <span role="columnheader">City</span>
            <span role="columnheader">Date</span>
            <span role="columnheader">Ticket Link</span>
          </div>

          {events.map((event, rowIndex) => (
            <div className="event__row" role="row" key={event.id}>
              <span role="cell" className="event__session">
                {event.title}
              </span>
              <span className="event__venue">
                <FlipText text={event.venue} baseDelay={rowIndex * 90 + 120} />
              <br/>
                <span className="event__venue_address">{event.venueAddress}
                  </span>
              </span>
              <span role="cell" className="event__city">
                <FlipText text={event.city.toUpperCase()} baseDelay={rowIndex * 90} />
              </span>
              <span role="cell" className="event__date">
                <FlipText text={event.displayDate} baseDelay={rowIndex * 90 + 120} />
              </span>
             <span role="cell" className="event__date" >
                 <a href={event.ticketLink}>BUY TICKET NOW</a>
              </span> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
