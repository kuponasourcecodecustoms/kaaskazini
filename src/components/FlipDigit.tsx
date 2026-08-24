import React, { useEffect, useRef, useState } from "react";
import "./FlipDigit.css";

interface FlipDigitProps {
  value: string;
  delay?: number;
}

/**
 * A single split-flap character, styled after airport/train departure
 * events. Cycles through a short run of glyphs before settling on the
 * target value, staggered by `delay` so a row resolves left to right.
 */
const GLYPHS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

const FlipDigit: React.FC<FlipDigitProps> = ({ value, delay = 0 }) => {
  const [display, setDisplay] = useState(value);
  const [flipping, setFlipping] = useState(false);
  const settled = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    settled.current = false;
    let step = 0;
    const steps = 6;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        step += 1;
        setFlipping(true);
        if (step >= steps) {
          clearInterval(interval);
          setDisplay(value);
          settled.current = true;
          window.setTimeout(() => setFlipping(false), 120);
        } else {
          const randomGlyph =
            GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          setDisplay(randomGlyph);
        }
      }, 55);
    }, delay);

    return () => clearTimeout(startTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, delay]);

  return (
    <span className={`flip-digit${flipping ? " is-flipping" : ""}`}>
      {display}
    </span>
  );
};

export default FlipDigit;
