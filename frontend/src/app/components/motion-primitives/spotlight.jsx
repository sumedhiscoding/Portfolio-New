"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/app/lib/utils";

export const Spotlight = ({
  className,
  size = 200,
  springOptions = { bounce: 0.3, damping: 20, stiffness: 200 },
}) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState(null);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = "relative";
        parent.style.overflow = "hidden";
        setParentElement(parent);
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement]
  );

  useEffect(() => {
    if (!parentElement) return;

    const abortController = new AbortController();

    parentElement.addEventListener("mousemove", handleMouseMove, {
      signal: abortController.signal,
    });
    parentElement.addEventListener("mouseenter", () => setIsHovered(true), {
      signal: abortController.signal,
    });
    parentElement.addEventListener("mouseleave", () => setIsHovered(false), {
      signal: abortController.signal,
    });

    return () => {
      abortController.abort();
    };
  }, [parentElement, handleMouseMove]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute rounded-full transition-opacity duration-300",
        isHovered ? "opacity-100" : "opacity-0",
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
        background: `radial-gradient(circle at center,
    #00FFFF 0%,
    #99FFFF 40%,
    transparent 70%)`,
        filter: "blur(45px)",
        zIndex: 5,
      }}
    />
  );
};
