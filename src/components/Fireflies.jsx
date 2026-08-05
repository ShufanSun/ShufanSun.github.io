import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

// Ambient drifting fireflies, in the spirit of github.com/garrettallen/fireflies:
// a handful of small glowing dots wandering inside their container.
const Fireflies = ({ count = 22, color = "#a2dbb8" }) => {
  const ref = useRef(null);
  const [box, setBox] = useState({ w: 0, h: 0 });

  // Drift is measured against the container, so the flies cover the same
  // proportion of the field whatever height the header happens to be.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () =>
      setBox({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const flies = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: 2 + Math.random() * 2.5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        // unit drift, scaled by the container below
        ux: Math.random() * 2 - 1,
        uy: Math.random() * 2 - 1,
        duration: 7 + Math.random() * 9,
        delay: Math.random() * 6,
      })),
    [count]
  );

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {box.h > 0 &&
        flies.map((f) => {
          const dx = f.ux * box.w * 0.06;
          const dy = f.uy * box.h * 0.22;
          return (
            <motion.span
              key={f.id}
              className="absolute rounded-full"
              style={{
                left: `${f.left}%`,
                top: `${f.top}%`,
                width: f.size,
                height: f.size,
                backgroundColor: color,
                boxShadow: `0 0 ${f.size * 4}px ${f.size * 1.5}px ${color}`,
              }}
              animate={{
                x: [0, dx, dx * -0.5, 0],
                y: [0, dy, dy * -0.7, 0],
                opacity: [0, 0.9, 0.25, 0.8, 0],
              }}
              transition={{
                duration: f.duration,
                delay: f.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
    </div>
  );
};

export default Fireflies;
