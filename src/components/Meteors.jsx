import React, { useMemo } from "react";
import { motion } from "framer-motion";

// Occasional meteor shower: streaks that dart from the top-right toward the
// lower-left at random intervals. They live in the top ~2/3 of the container and
// fade out into the void before reaching the bottom. Only one or two show at once.
const Meteors = ({ count = 8, color = "#ffffff" }) => {
  const travelDeg = 158; // direction of travel: down-left (top-right → lower-left)
  const rad = (travelDeg * Math.PI) / 180;

  const meteors = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 34 - 12, // initiate in the top third or above (-12% … 22%)
        left: 45 + Math.random() * 50, // start on the right side (45–95%)
        tail: 70 + Math.random() * 100, // streak length in px
        dist: 480 + Math.random() * 260, // travel distance in px
        duration: 0.9 + Math.random() * 0.8,
        delay: Math.random() * 9,
        repeatDelay: 5 + Math.random() * 10, // the "occasional" gap
      })),
    [count]
  );

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
      aria-hidden="true"
    >
      {meteors.map((m) => {
        const dx = Math.cos(rad) * m.dist; // negative → leftward
        const dy = Math.sin(rad) * m.dist; // positive → downward
        const timing = {
          duration: m.duration,
          delay: m.delay,
          repeat: Infinity,
          repeatDelay: m.repeatDelay,
          ease: "linear",
        };
        return (
          <motion.div
            key={m.id}
            className="absolute"
            style={{ top: `${m.top}%`, left: `${m.left}%` }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: dx, y: dy, opacity: [0, 1, 1, 0] }}
            transition={{
              ...timing,
              // Fade in on entry, then fully to void by ~2/3 of the flight — gone
              // well before the streak could reach the bottom third of the band.
              opacity: { ...timing, times: [0, 0.1, 0.5, 0.68] },
            }}
          >
            <div
              style={{
                width: m.tail,
                height: 1,
                borderRadius: 9999,
                transform: `rotate(${travelDeg}deg)`,
                transformOrigin: "left center",
                background: `linear-gradient(to right, transparent, ${color})`,
                boxShadow: "0 0 6px 0 rgba(255, 255, 255, 0.4)",
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Meteors;
