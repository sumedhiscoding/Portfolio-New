"use client";
import React, { useEffect, useRef } from "react";
import { SpotlightCustomColor } from "../components/SpotlightCustomColor/SpotlightCustomColor";

export default function SineWaveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas to full viewport size

    let phase = 0;

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);
      //   ctx.moveTo(0, height / 2);
      ctx.beginPath();

      for (let y1 = 0; y1 < width; y1++) {
        const x1 = height / 2 + Math.sin((y1 + phase) * 0.015) * 50; // amplitude = 50
        ctx.lineTo(x1, y1);
      }

      ctx.strokeStyle = "#2563eb"; // Tailwind blue-600
      ctx.lineWidth = 2;
      ctx.stroke();

      phase += 2; // speed

      //   requestAnimationFrame(draw);
    };

    draw();

    return () => {};
  }, []);

  return (
    <div
      className="container border-2 border-solid"
      style={{ display: "flex" }}
    >
      <div>
        <canvas
          ref={canvasRef}
          height={900}
          width={500}
          className="border block"
        />
      </div>
      <div className="text-3xl">asdfasdfasd</div>
    </div>
  );
}
