"use client";
import React, { useEffect, useState } from "react";
import { TextRoll } from "./motion-primitives/textRoll";
import { TextEffect } from "./motion-primitives/text-effect";

const Header = ({ title }) => {
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRenderKey((prev) => prev + 1);
    }, 5000); // every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header key={renderKey} className="pt-10 pr-4 pl-4 h1_display ">
      <div className="container flex flex-col items-center text-center">
        <TextRoll className="font-bold text-4xl">{title}</TextRoll>
        <TextEffect
          className="text-lg text-gray-700 dark:text-gray-300 mt-2"
          preset="fade-in-blur"
          speedReveal={1.1}
          speedSegment={0.3}
        >
          Demystifying Algorithms, System Design, and Core CS Concepts — One
          Post at a Time.
        </TextEffect>
      </div>
    </header>
  );
};

export default Header;
