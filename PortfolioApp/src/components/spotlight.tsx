"use client";

import { useEffect, useState } from "react";

export function Spotlight() {
  const [position, setPosition] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      setPosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-80 transition-opacity duration-300 motion-reduce:hidden"
      style={{
        background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(37, 99, 235, 0.16), rgba(6, 182, 212, 0.07) 18rem, transparent 36rem)`
      }}
    />
  );
}
