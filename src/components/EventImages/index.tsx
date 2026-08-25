import React, { useEffect, useState } from "react";
import "./EventImages.css";

export type CarouselImage = {
  src: string;
  alt: string;
  location: string;
};

type EventImagesProps = {
  images: CarouselImage[];
};

const EventImages: React.FC<EventImagesProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) return null;

  const activeImage = images[activeIndex] ?? images[0];

  return (
    <section className="event_images" id="event_images">
      <div className="wrap">
        <p className="eyebrow">View from the DJ Booth</p>
        <h2 className="event_images__title">Kaaskazini I</h2>

        <div className="event_images__carousel" aria-live="polite">
          <figure className="event_images__slide">
            <img
              className="event_images__image"
              src={activeImage.src}
              alt={activeImage.alt}
            />
            <figcaption className="event_images__caption">
              <span>Kaaskazini / {String(activeIndex + 1).padStart(2, "0")}</span>
              <span>{activeImage.location}</span>
            </figcaption>
          </figure>

          <div className="event_images__controls">
            <button
              type="button"
              className="event_images__arrow"
              aria-label="Show previous image"
              onClick={() =>
                setActiveIndex((activeIndex - 1 + images.length) % images.length)
              }
            >
              &larr;
            </button>
            <div className="event_images__dots" aria-label="Choose an image">
              {images.map((image, index) => (
                <button
                  type="button"
                  className={`event_images__dot${index === activeIndex ? " event_images__dot--active" : ""}`}
                  aria-label={`Show image ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  key={image.src}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="event_images__arrow"
              aria-label="Show next image"
              onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventImages;
