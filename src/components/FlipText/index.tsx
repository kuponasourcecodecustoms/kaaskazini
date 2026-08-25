import React from "react";
import FlipDigit from "../FlipDigit";

interface FlipTextProps {
  text: string;
  baseDelay?: number;
  stagger?: number;
}

const FlipText: React.FC<FlipTextProps> = ({
  text,
  baseDelay = 0,
  stagger = 28,
}) => {
  return (
    <>
      {text.split("").map((char, i) => (
        <FlipDigit
          // eslint-disable-next-line react/no-array-index-key
          key={`${char}-${i}`}
          value={char}
          delay={baseDelay + i * stagger}
        />
      ))}
    </>
  );
};

export default FlipText;
